const router = require('express').Router();
const { Op } = require('sequelize');
const axios = require('axios');
const { City, Airline } = require('../../db/models');

// /cities

router.route('/').get(async (req, res) => {
  const town = req.query.city;
  const cities = await City.findAll({
    where: { name: { [Op.startsWith]: town } },
    limit: 5,
  });
  res.json(cities);
});

const makeLink = (origin, destination, departureAt, returnAt) => {
  const apiKey = '0189e1c40946c1f4849b54d331a7c2e4';
  const aviaLink = 'https://api.travelpayouts.com/aviasales/v3/prices_for_dates';
  if (departureAt === undefined) {
    return `${aviaLink}?origin=${origin}&destination=${destination}&currency=rub&sorting=price&direct=true&limit=30&token=${apiKey}`;
  } if (departureAt !== undefined && returnAt === undefined) {
    return `${aviaLink}?origin=${origin}&destination=${destination}&currency=rub&departure_at=${departureAt}&sorting=price&direct=true&limit=30&token=${apiKey}`;
  }
  return `${aviaLink}?origin=${origin}&destination=${destination}&currency=rub&departure_at=${departureAt}&return_at=${returnAt}&sorting=price&direct=true&limit=30&token=${apiKey}`;
};

router.route('/tickets').post(async (req, res) => {
  try {
    console.log('Прилетел post-request по ручке /cities/tickets');
    const {
      origin, destination, departureAt, returnAt,
    } = req.body;
    const airlines = await Airline.findAll({
      attributes: ['code', 'name_translations'],
      raw: true,
    });
    const cities = await City.findAll({
      attributes: ['code', 'name'],
      raw: true,
    });
    console.log(origin, destination, departureAt, returnAt);
    console.log(makeLink(origin, destination, departureAt, returnAt));
    const { data } = await axios.get(makeLink(origin, destination, departureAt, returnAt));
    // const { data } = await axios.get('https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=MOW&destination=AER&currency=rub&departure_at=2022-01-17&return_at=2022-01-20&sorting=price&direct=true&limit=30&token=0189e1c40946c1f4849b54d331a7c2e4');
    const result = data.data.map((dataItem) => {
      const originCity = cities.filter((element) => element.code === dataItem.origin);
      const destinationCity = cities.filter((element) => element.code === dataItem.destination);
      const airlineName = airlines.filter((element) => element.code === dataItem.airline);
      const newItem = {
        ...dataItem,
        originCity: originCity[0].name,
        destinationCity: destinationCity[0].name,
        airlineName: airlineName[0].name_translations,
      };
      return newItem;
    });
    res.json({ success: true, data: result, currency: 'rub' });
  } catch ({ error }) {
    console.log('ОШИБКА', error, 'ОШИБКА');
  }
});

module.exports = router;
// https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=MOW&destination=AER&currency=rub&departure_at=2022-01-17&return_at=2022-02-21&sorting=price&direct=true&limit=30&token=0189e1c40946c1f4849b54d331a7c2e4

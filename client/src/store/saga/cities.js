/* eslint-disable no-unused-vars */
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../types/cities';
import * as actions from '../actions/cities';
import * as actionsS from '../actions/index';

function* getCitiesFrom(action) {
  const { type, payload } = action;
  const city = payload;
  // console.log(action, 'Сага до обращения к серверу откуда');
  // console.log(city, 'Сага до обращения к серверу сити откуда');
  const { data } = yield call(
    axios.get,
    `http://localhost:4000/cities?city=${city}`,
  );
  // console.log(data, 'Сага с данными по городам с сервера откуда');
  yield put(actions.getNewCitiesFrom(data));
}

function* getCitiesTo(action) {
  const { type, payload } = action;
  const city = payload;
  // console.log(action, 'Сага до обращения к серверу куда');
  // console.log(city, 'Сага до обращения к серверу сити куда');
  const { data } = yield call(
    axios.get,
    `http://localhost:4000/cities?city=${city}`,
  );
  // console.log(data, 'Сага с данными по городам с сервера куда');
  yield put(actions.getNewCitiesTo(data));
}

function* giveAwayInfoForTicket(action) {
  const { type, payload } = action;
  const {
    from, to, datefrom, dateto,
  } = payload;
  console.log(payload);
  const { data } = yield call(axios.post, 'http://localhost:4000/cities/tickets', {
    origin: from, destination: to, departureAt: datefrom, returnAt: dateto,
  });
  yield put(actionsS.getSliderResSuccess({ data }));
}

export default function* getCitiesSaga() {
  yield takeEvery(types.GET_CITIES_FROM, getCitiesFrom);
  yield takeEvery(types.GET_CITIES_TO, getCitiesTo);
  yield takeEvery(types.GET_INFO_FOR_TICKET, giveAwayInfoForTicket);
}

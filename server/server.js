/* eslint-disable no-console */
// const dotenv = require('dotenv').config();

const app = require('./app');
const { connect } = require('./db');

const PORT = 4000;

function conectToServer() {
  app.listen(PORT, () => console.log(`Соединен с сервером ${PORT}`));
}

connect()
  .then(conectToServer)
  .catch(process.exit);

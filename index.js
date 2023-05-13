/* eslint-disable import/no-extraneous-dependencies */
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const router = require('./routes');
const config = require('./config');
const { STORAGE_DIR } = require('./consts');

console.log(STORAGE_DIR);
const app = express();

app.use(cors(config.cors));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, _res, next) => {
  console.log(req.url);
  next();
});

app.use(router);

app.listen(
  config.server.port,
  () => console.log(`http://localhost:${config.server.port}`),
);

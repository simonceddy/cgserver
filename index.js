require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const fileUpload = require('express-fileupload');
const router = require('./routes');
const config = require('./config');
const db = require('./database');
const { serverLogger } = require('./logger');
require('./auth');

// TODO remove from prod
db.authenticate()
  .then(() => console.log('db connected'))
  .catch((err) => console.log(`error: ${err.message}`));

const app = express();

app.use(cors(config.cors));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use((req, _res, next) => {
  console.log(req.url);
  next();
});

app.use(serverLogger);

app.use(router);

app.listen(
  config.server.port,
  () => console.log(`http://localhost:${config.server.port}`),
);

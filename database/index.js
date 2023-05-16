/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
const {
  Sequelize
} = require('sequelize');
const dbConfig = require('./config');

const db = new Sequelize(dbConfig.development);

module.exports = db;

/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
const {
  Sequelize
} = require('sequelize');
const dbConfig = require('./database');

const db = new Sequelize(dbConfig.development);

module.exports = db;

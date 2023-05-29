const {
  Sequelize
} = require('sequelize');
const dbConfig = require('./database');

const db = new Sequelize(dbConfig.development);

module.exports = db;

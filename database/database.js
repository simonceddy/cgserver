const { dbLogger } = require('../logger');

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: 'storage/database.sqlite',
    logging: (e) => {
      dbLogger.log('info', e);
    },
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};

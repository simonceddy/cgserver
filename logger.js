const winston = require('winston');
const expressWinston = require('express-winston');

const serverLogger = expressWinston.logger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({
      filename: 'logs/combined.log',
      format: winston.format.simple()
    }),
  ],
});

const dbLogger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.File({ filename: 'logs/database.log' })
  ]
});

module.exports = { serverLogger, dbLogger };

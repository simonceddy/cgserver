const config = {
  cors: {
    origin: process.env.CORS_ALLOW_ORIGIN || [
      'http://localhost:3000',
      'http://localhost:3001'
    ]
  },
  server: {
    port: 8888
  }
};

module.exports = config;

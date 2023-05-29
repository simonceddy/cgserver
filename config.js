const config = {
  cors: {
    origin: process.env.CORS_ALLOW_ORIGIN || [
      'http://localhost:3000',
      'http://localhost:3001'
    ]
  },
  server: {
    port: process.env.SERVER_PORT || 8888
  },
  auth: {
    jwt: {
      secret: process.env.JWT_SECRET || 'verysecure'
    }
  }
};

module.exports = config;

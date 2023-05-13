// auth routes
const express = require('express');

const authRouter = express.Router();

authRouter.get('/login', (_req, res) => {
  res.send('login');
});

module.exports = authRouter;

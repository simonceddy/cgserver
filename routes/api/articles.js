/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const articlesRouter = express.Router();

articlesRouter.get('/', (_req, res) => {
  res.json([
    'article1',
    'article2',
    'article3',
  ]);
});

module.exports = articlesRouter;

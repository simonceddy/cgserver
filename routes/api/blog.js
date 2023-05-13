/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const blogRouter = express.Router();

blogRouter.get('/', (_req, res) => {
  res.json([
    'blog1',
    'blog2',
    'blog3',
  ]);
});

module.exports = blogRouter;

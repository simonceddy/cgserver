/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const blogRouter = require('./blog');
const articlesRouter = require('./articles');

const apiRouter = express.Router();

apiRouter.use('/blog', blogRouter);
apiRouter.use('/articles', articlesRouter);

module.exports = apiRouter;

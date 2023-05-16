/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const blogRouter = require('./blog');
const pageRouter = require('./page');

const apiRouter = express.Router();

apiRouter.use('/blog', blogRouter);
apiRouter.use('/page', pageRouter);

module.exports = apiRouter;

const express = require('express');
const pageRouter = require('./page');

const apiRouter = express.Router();

apiRouter.use('/page', pageRouter);
apiRouter.get('/', (_req, res) => res.json({ message: 'welcome to the api' }));

module.exports = apiRouter;

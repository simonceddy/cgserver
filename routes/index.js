/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const apiRouter = require('./api');

const router = express.Router();

router.use('/', express.static('client'));
router.use('/admin', express.static('admin'));
router.get('/test', (_req, res) => res.send('testing'));
router.use('/api', apiRouter);

module.exports = router;

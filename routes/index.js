/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const router = express.Router();

router.get('/test', (_req, res) => res.send('testing'));

module.exports = router;

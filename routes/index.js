const express = require('express');
const apiRouter = require('./api');
const mediaRouter = require('./media');

const router = express.Router();

// React client - currently blank html page
router.use('/', express.static('client'));

// React Admin client - currently blank html page
// TODO auth
router.use('/admin', express.static('admin'));

// Test
router.get('/test', (_req, res) => res.send('testing'));

// API Routes
router.use('/api', apiRouter);

// Media Router
router.use('/media', mediaRouter);

module.exports = router;

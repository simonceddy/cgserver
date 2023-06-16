// media router
const express = require('express');

const mediaRouter = express.Router();

mediaRouter.post('/upload', (req, res) => {
  console.log(req.files);
  res.json({
    message: 'Hello File Upload'
  });
});

module.exports = mediaRouter;

// media router
const express = require('express');
const { uploadFile, getFilePath } = require('../util');
const respondWithFile = require('../util/respondWithFile');

const mediaRouter = express.Router();

mediaRouter.post('/upload', (req, res) => {
  // console.log(req.files);
  if (req.files) {
    const file = Object.values(req.files)[0];
    if (file) {
      const src = uploadFile(file);
      if (src === null) {
        return res.json({
          message: 'An error occurred.',
          success: false,
        });
      }
      return res.json({
        message: 'Uploaded!',
        success: true,
        src
      });
    }
  }
  return res.json({
    message: 'No files detected.',
    success: false
  });
});

mediaRouter.get('/get/:src', (req, res, next) => {
  const fn = getFilePath(req.params.src);
  return respondWithFile(req, res, next, fn);
});

module.exports = mediaRouter;

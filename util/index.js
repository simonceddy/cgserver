const path = require('path');
const fs = require('fs');
const { kebabCase } = require('lodash');
const { STORAGE_DIR } = require('../consts');

const uploadsDir = path.join(STORAGE_DIR, 'uploads');

if (!fs.existsSync(uploadsDir) || !fs.statSync(uploadsDir).isDirectory()) {
  fs.mkdirSync(uploadsDir);
}

/**
 * upload a file
 * @param {import('express-fileupload').UploadedFile} file Uploaded file
 * @returns {string|null}
 */
function uploadFile(file) {
  const filename = `${Date.now()}-${kebabCase(file.name)}`;
  file.mv(path.join(uploadsDir, filename));
  return filename;
}

function getFilePath(src) {
  const fullpath = path.join(uploadsDir, src);
  return fullpath;
}

module.exports = {
  uploadFile,
  getFilePath
};

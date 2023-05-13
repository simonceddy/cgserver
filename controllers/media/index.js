// media controllers go here
const fs = require('fs');
const { STORAGE_DIR } = require('../../consts');

if (!fs.existsSync(STORAGE_DIR) || !fs.statSync(STORAGE_DIR).isDirectory()) {
  fs.mkdirSync(STORAGE_DIR);
}

function addFile(file) {
  console.log('add file to storage', file);
  return 'filename';
}

module.exports = {
  addFile
};

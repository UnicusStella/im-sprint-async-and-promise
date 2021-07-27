const fs = require('fs');

const getDataFromFile = function (filePath, callback) {
  // TODO: fs.readFile을 이용해
  setTimeout(callback, filePath);
};

// getDataFromFile('README.md', (err, data) => console.log(data));

module.exports = {
  getDataFromFile,
};

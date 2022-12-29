// album.service.js
const albumDataService = require('./album.data.service');

async function getAlbum(id) {
  return albumDataService.getAlbum(id);
}

module.exports = {
  getAlbum,
};

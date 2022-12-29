// artist.service.js
const artistDataService = require("./artist.data.service");

async function getArtist(id) {
  return artistDataService.getArtist(id);
}

module.exports = {
  getArtist,
};

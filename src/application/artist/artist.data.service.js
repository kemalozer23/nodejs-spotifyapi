// artist.data.service.js
const spotifyApiClient = require("../spotifyApiClient");
const artistRepository = require("../../infrastructure/repository/artist/artist.repository");
const albumRepository = require("../../infrastructure/repository/album/album.repository");

async function getArtist(id) {
  let artist = await artistRepository.getArtist(id);
  if (artist == null) {
    artist = await spotifyApiClient.getArtist(id);
    artistRepository.insertArtist(artist);
    artist = await artistRepository.getArtist(id);
  }
  return artist;
}

module.exports = {
  getArtist,
};
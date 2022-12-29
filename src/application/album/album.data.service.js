// album.data.service.js
const spotifyApiClient = require('../spotifyApiClient');
const albumRepository = require('../../infrastructure/repository/album/album.repository');
const trackRepository = require('../../infrastructure/repository/track/track.repository');

async function getAlbum(id) {
  let album = await albumRepository.getAlbum(id);
  if (album == null) {
    album = await spotifyApiClient.getAlbum(id);
    console.log(album.tracks);
    albumRepository.insertAlbum(album);
    album = await albumRepository.getAlbum(id);
  }
  return album;
}

module.exports = {
  getAlbum,
};

// album.data.service.js
const spotifyApiClient = require('../spotifyApiClient');
const albumRepository = require('../../infrastructure/repository/album/album.repository');
const trackRepository = require('../../infrastructure/repository/track/track.repository');

async function getAlbum(id) {
  let album = albumRepository.getAlbum(id);
  if (album === null) {
    album = await spotifyApiClient.getAlbum(id);
    albumRepository.insertAlbum(album);
  }
  const tracks = await spotifyApiClient.getAlbumTracks(id);
  tracks.forEach(async (track) => {
    let storedTrack = trackRepository.getTrack(track.id);
    if (storedTrack === null) {
      storedTrack = await spotifyApiClient.getTrack(track.id);
      trackRepository.insertTrack(storedTrack);
    }
  });
  return album;
}

module.exports = {
  getAlbum,
};

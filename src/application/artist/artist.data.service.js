// artist.data.service.js
const spotifyApiClient = require("../spotifyApiClient");
const artistRepository = require("../../infrastructure/repository/artist/artist.repository");
const albumRepository = require("../../infrastructure/repository/album/album.repository");

async function getArtist(id) {
  let artist = artistRepository.getArtist(id);
  if (artist === null) {
    artist = await spotifyApiClient.getArtist(id);
    artistRepository.insertArtist(artist);
  }
  const albums = await spotifyApiClient.getArtistAlbums(id);
  albums.forEach(async (album) => {
    let storedAlbum = albumRepository.getAlbum(album.id);
    if (storedAlbum === null) {
      storedAlbum = await spotifyApiClient.getAlbum(album.id);
      albumRepository.insertAlbum(storedAlbum);
    }
  });
  return artist;
}

module.exports = {
  getArtist,
};
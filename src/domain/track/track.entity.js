// track.entity.js
class Track {
  constructor(id, name, albumId, albumName, duration_ms, external_urls, href, preview_url, artistId, artistName) {
    this.id = id;
    this.name = name;
    this.albumId = albumId;
    this.albumName = albumName;
    this.duration_ms = duration_ms;
    this.external_urls = external_urls;
    this.href = href;
    this.preview_url = preview_url;
    this.artistId = artistId;
    this.artistName = artistName;
  }
}

module.exports = {
  Track,
};
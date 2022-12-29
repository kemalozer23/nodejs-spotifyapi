// album.entity.js
class Album {
  constructor(id, name, copyrights, external_urls, href, images, label, release_date, total_tracks, tracks_ids, tracks_names, artists_id, artists_name) {
    this.id = id;
    this.name = name;
    this.copyrights = copyrights,
    this.external_urls = external_urls,
    this.href = href,
    this.images = images,
    this.label = label,
    this.release_date = release_date,
    this.total_tracks = total_tracks,
    this.tracks_ids = tracks_ids,
    this.tracks_names = tracks_names,
    this.artists_id = artists_id,
    this.artists_name = artists_name
  }
}

module.exports = {
  Album,
};
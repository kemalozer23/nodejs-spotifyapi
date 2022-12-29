// artist.entity.js
class Artist {
  constructor(id, name, external_urls, followers, genres, href, images) {
    this.id = id;
    this.name = name;
    this.external_urls = external_urls;
    this.followers = followers;
    this.genres = genres;
    this.href = href;
    this.images = images;
  }
}

module.exports = {
  Artist,
};

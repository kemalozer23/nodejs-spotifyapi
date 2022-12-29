// artist.entity.js
class Artist {
  constructor(id, name, genres, images) {
    this.id = id;
    this.name = name;
    this.genres = genres;
    this.images = images;
  }
}

module.exports = {
  Artist,
};

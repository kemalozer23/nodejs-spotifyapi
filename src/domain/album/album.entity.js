// album.entity.js
class Album {
  constructor(id, name, releaseDate, images) {
    this.id = id;
    this.name = name;
    this.releaseDate = releaseDate;
    this.images = images;
  }
}

module.exports = {
  Album,
};
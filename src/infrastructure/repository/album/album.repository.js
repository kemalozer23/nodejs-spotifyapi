// album.repository.js
const { query } = require("../../database/database");
const { Album } = require("../../../domain/album/album.entity");

async function getAlbum(id) {
  const result = await query("SELECT * FROM albums WHERE id = $1", [id]);
  if (result.rows.length === 0) {
    return null;
  }
  return new Album(
    result.rows[0].id,
    result.rows[0].name,
    result.rows[0].release_date,
    result.rows[0].total_tracks,
    result.rows[0].images
  );
}

async function insertAlbum(album) {
  await query(
    "INSERT INTO albums (id, name, release_date, total_tracks, images) VALUES ($1, $2, $3, $4, $5)",
    [album.id, album.name, album.release_date, album.total_tracks, album.images]
  );
}

module.exports = {
  getAlbum,
  insertAlbum,
};
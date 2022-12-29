// artist.repository.js
const { query } = require("../../database/database");
const { Artist } = require("../../../domain/artist/artist.entity");

async function getArtist(id) {
  const result = await query("SELECT * FROM artists WHERE id = $1", [id]);
  if (result.rows.length === 0) {
    return null;
  }
  return new Artist(
    result.rows[0].id,
    result.rows[0].name,
    result.rows[0].popularity,
    result.rows[0].followers,
    result.rows[0].images
  );
}

async function insertArtist(artist) {
  await query(
    "INSERT INTO artists (id, name, popularity, followers, images) VALUES ($1, $2, $3, $4, $5)",
    [artist.id, artist.name, artist.popularity, artist.followers, artist.images]
  );
}

module.exports = {
  getArtist,
  insertArtist,
};
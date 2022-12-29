// artist.repository.js
const { query } = require("../../database/database");
const { Artist } = require("../../../domain/artist/artist.entity");

const createArtistsTable = async () => {
  await query(`
    CREATE TABLE IF NOT EXISTS artists (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255),
      external_urls VARCHAR(255),
      followers VARCHAR(255),
      genres VARCHAR(255),
      href VARCHAR(255),
      images VARCHAR(255)
    )
  `);
};

async function getArtist(id) {
  await createArtistsTable();
  const result = await query("SELECT * FROM artists WHERE id = $1", [id]);
  if (result.rows.length === 0) {
    return null;
  }
  return new Artist(
    result.rows[0].id,
    result.rows[0].name,
    result.rows[0].external_urls,
    result.rows[0].followers,
    result.rows[0].genres,
    result.rows[0].href,
    result.rows[0].images
  );
}

async function insertArtist(artist) {
  await createArtistsTable();
  await query("INSERT INTO artists (id, name, external_urls, followers, genres, href, images) VALUES ($1, $2, $3, $4, $5, $6, $7)", [
    artist.id,
    artist.name,
    artist.external_urls['spotify'],
    artist.followers['total'],
    artist.genres.join(),
    artist.href,
    artist.images[0].url,
  ]);
}

module.exports = {
  getArtist,
  insertArtist,
};

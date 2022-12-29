const { query } = require("../../database/database");
const { Track } = require("../../../domain/track/track.entity");

const createTracksTable = async () => {
  await query(`
    CREATE TABLE IF NOT EXISTS tracks (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255),
      albumId VARCHAR(255),
      albumName VARCHAR(255),
      duration_ms INTEGER,
      external_urls VARCHAR(255),
      href VARCHAR(255),
      preview_url VARCHAR(255),
      artistId VARCHAR(255),
      artistName VARCHAR(255)
    )
  `);
};

async function getTrack(id) {
  await createTracksTable(); // Create the tracks table if it does not exist
  const result = await query("SELECT * FROM tracks WHERE id = $1", [id]);
  if (result.rows.length === 0) {
    return null;
  }
  return new Track(
    result.rows[0].id,
    result.rows[0].name,
    result.rows[0].albumId,
    result.rows[0].albumName,
    result.rows[0].duration_ms,
    result.rows[0].external_urls,
    result.rows[0].href,
    result.rows[0].preview_url,
    result.rows[0].artistId,
    result.rows[0].artistName
  );
}

async function insertTrack(track) {
  await createTracksTable(); // Create the tracks table if it does not exist
  await query(
    "INSERT INTO tracks (id, name, albumId, albumName, duration_ms, external_urls, href, preview_url, artistId, artistName) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
    [
      track.id,
      track.name,
      track.album.id,
      track.album.name,
      track.duration_ms,
      track.external_urls.spotify,
      track.href,
      track.preview_url,
      track.artists.id,
      track.artists.name,
    ]
  );
}

module.exports = {
  getTrack,
  insertTrack,
};

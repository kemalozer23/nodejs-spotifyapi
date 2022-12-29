// album.repository.js
const { query } = require("../../database/database");
const { Album } = require("../../../domain/album/album.entity");

const createAlbumsTable = async () => {
  await query(`
    CREATE TABLE IF NOT EXISTS albums (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255),
      copyrights VARCHAR(255),
      external_urls VARCHAR(255),
      href VARCHAR(255),
      images VARCHAR(255),
      label VARCHAR(255),
      release_date VARCHAR(255),
      total_tracks INTEGER,
      tracks_ids VARCHAR(1000),
      tracks_names VARCHAR(255),
      artists_id VARCHAR(255),
      artists_name VARCHAR(255),
      test JSONB
    )
  `);
};

async function getAlbum(id) {
  await createAlbumsTable();
  const result = await query("SELECT * FROM albums WHERE id = $1", [id]);
  console.log(result);
  if (result.rows.length === 0) {
    return null;
  }
  return new Album(result.rows[0].id, result.rows[0].name);
}

async function insertAlbum(album) {
  let tracks_ids = [];
  let tracks_names = [];
  album.tracks.items.forEach((element) => {
    tracks_ids.push(element.id);
    tracks_names.push(`${element.track_number}-${element.name}`);
  });
  await createAlbumsTable();
  await query(
    "INSERT INTO albums (id, name, copyrights, external_urls, href, images, label, release_date, total_tracks, tracks_ids, tracks_names, artists_id, artists_name, test) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)",
    [
      album.id,
      album.name,
      album.copyrights.text,
      album.external_urls.spotify,
      album.href,
      album.images[0].url,
      album.label,
      album.release_date,
      album.total_tracks,
      tracks_ids.join(),
      tracks_names.join(),
      album.artists[0].id,
      album.artists[0].name,
      album
    ]
  );
}

module.exports = {
  getAlbum,
  insertAlbum,
};

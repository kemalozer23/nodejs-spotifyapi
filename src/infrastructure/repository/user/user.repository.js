// user.repository.js
const { query } = require("../../database/database");
const { User } = require("../../../domain/user/user.entity");

async function getUser(id) {
  const result = await query("SELECT * FROM users WHERE id = $1", [id]);
  if (result.rows.length === 0) {
    return null;
  }
  return new User(
    result.rows[0].id,
    result.rows[0].display_name,
    result.rows[0].email,
    result.rows[0].country
  );
}

async function insertUser(user) {
  await query(
    "INSERT INTO users (id, display_name, email, country) VALUES ($1, $2, $3, $4)",
    [user.id, user.display_name, user.email, user.country]
  );
}

module.exports = {
  getUser,
  insertUser,
};
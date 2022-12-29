// user.entity.js
class User {
  constructor(id, displayName, email, images) {
    this.id = id;
    this.displayName = displayName;
    this.email = email;
    this.images = images;
  }
}

module.exports = {
  User,
};
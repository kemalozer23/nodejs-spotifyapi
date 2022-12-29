// track.service.js
const trackDataService = require("./track.data.service");

async function getTrack(id) {
  return trackDataService.getTrack(id);
}

module.exports = {
  getTrack,
};

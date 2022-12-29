const spotifyApiClient = require("../spotifyApiClient");
const trackRepository = require("../../infrastructure/repository/track/track.repository");

async function getTrack(id) {
  let track = await trackRepository.getTrack(id);

  if (track == null) {
    track = await spotifyApiClient.getTrack(id);
    trackRepository.insertTrack(track);
    track = await trackRepository.getTrack(id);
  }
  return track;
}

module.exports = {
  getTrack,
};

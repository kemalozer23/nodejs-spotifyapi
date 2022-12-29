// spotifyApiClient.js
const axios = require("axios");

require('dotenv').config();

const { CLIENT_ID, CLIENT_SECRET } = process.env;

const spotifyApiBaseUrl = "https://api.spotify.com/v1";

let accessToken = null;
let accessTokenExpirationTimestamp = null;

async function getAccessToken() {
  if (
    accessTokenExpirationTimestamp === null ||
    Date.now() > accessTokenExpirationTimestamp
  ) {
    const authString = `${CLIENT_ID}:${CLIENT_SECRET}`;
    const authBase64 = Buffer.from(authString).toString("base64");
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${authBase64}`,
        },
      }
    );
    accessToken = response.data.access_token;
    accessTokenExpirationTimestamp =
      Date.now() + response.data.expires_in * 1000;
  }
  return accessToken;
}

async function get(url, params) {
  const accessToken = await getAccessToken();
  const response = await axios.get(url, {
    params,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}

async function getArtist(id) {
  const url = `${spotifyApiBaseUrl}/artists/${id}`;
  const artist = await get(url);
  return artist;
}

async function getAlbum(id) {
  const url = `${spotifyApiBaseUrl}/albums/${id}`;
  const album = await get(url);
  return album;
}

async function getAlbumTracks(id) {
  const url = `${spotifyApiBaseUrl}/albums/${id}/tracks`;
  const tracks = await get(url);
  return tracks.items;
}

async function getTrack(id) {
  const url = `${spotifyApiBaseUrl}/tracks/${id}`;
  const track = await get(url);
  return track;
}

module.exports = {
  getArtist,
  getAlbum,
  getAlbumTracks,
  getTrack,
};

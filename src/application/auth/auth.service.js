const axios = require('axios');

require('dotenv').config();

const getAuthorizationUrl = () => {
  return 'https://accounts.spotify.com/authorize?client_id=' +
    process.env.CLIENT_ID +
    '&redirect_uri=' +
    process.env.REDIRECT_URI +
    '&response_type=code';
};

const getAccessToken = async (code) => {
  const data = {
    grant_type: 'authorization_code',
    code,
    redirect_uri: process.env.REDIRECT_URI,
  };

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + new Buffer(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'),
    },
  };

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', data, config);
    return response.data.access_token;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAuthorizationUrl,
  getAccessToken,
};

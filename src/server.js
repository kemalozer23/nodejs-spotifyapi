// server.js
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const artistRoute = require('./api/artist/artist.route');
const albumRoute = require('./api/album/album.route');
const trackRoute = require('./api/track/track.route');
const authRoute = require('./application/auth/auth.route');

require('dotenv').config()

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

app.use('/api/artist', artistRoute);
app.use('/api/album', albumRoute);
app.use('/api/track', trackRoute);
app.use('/api/auth', authRoute);

app.get('/', (req, res) => {
  res.sendFile( __dirname + '/home.html')
})

module.exports = {
  app,
};
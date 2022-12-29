// artist.route.js
const express = require('express');
const artistController = require('./artist.controller');

const router = express.Router();

router.use('/artists', artistController);

module.exports = router;

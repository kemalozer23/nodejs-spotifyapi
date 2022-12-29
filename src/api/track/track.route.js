// track.route.js
const express = require('express');
const trackController = require('./track.controller');

const router = express.Router();

router.use('/tracks', trackController);

module.exports = router;

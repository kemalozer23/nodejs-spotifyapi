// artist.route.js
const express = require('express');
const artistController = require('./artist.controller');

const router = express.Router();

router.use('/', artistController);

module.exports = router;

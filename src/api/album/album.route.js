// album.route.js
const express = require('express');
const albumController = require('./album.controller');

const router = express.Router();

router.use('/', albumController);

module.exports = router;

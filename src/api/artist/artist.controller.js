// artist.controller.js
const express = require('express');
const artistService = require('../../application/artist/artist.service')

const router = express.Router();

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const artist = await artistService.getArtist(id);
    res.send(artist);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;

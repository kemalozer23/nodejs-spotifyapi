// album.controller.js
const express = require('express');
const albumService = require('../../application/album/album.service');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const album = await albumService.getAlbum(id);
    res.send(album);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;

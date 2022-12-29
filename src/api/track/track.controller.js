const express = require("express");
const trackService = require("../../application/track/track.service");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const track = await trackService.getTrack(id);
    if (track) {
      res.send(track);
    } else {
      res.status(404).send('Track not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;

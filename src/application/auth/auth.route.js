const express = require('express');
const authService = require('./auth.service');

const router = express.Router();

router.get('/authorize', (req, res) => {
  const authorizationUrl = authService.getAuthorizationUrl();
  res.redirect(authorizationUrl);
});

router.get('/callback', async (req, res) => {
  const { code } = req.query;
  try {
    const accessToken = await authService.getAccessToken(code);
    res.send(accessToken);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;

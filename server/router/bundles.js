const axios = require('axios').default;
const router = require('express').Router();
const { service1 } = require('../config/services');

router.get('/services1.js', (req, res) => {
  axios.get(`${service1.url}/${service1.bundle}`)
    .then((response) => {
      res.set('Cache-Control', 'public, max-age=31557600');
      res.type('.js').send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;

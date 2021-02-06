const axios = require('axios').default;
const router = require('express').Router();
const { service1 } = require('../config/services');

router.get(service1.api, (req, res) => {
  axios.get(`${service1.url}${req.originalUrl}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;

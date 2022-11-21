const express = require("express");
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    fetch('https://sholiday.faboul.se/dagar/v2.1/')
        .then((response) => response.json())
        .then((data) => {
            res.json(data);
        });
  });

  router.get('/:month', async (req, res) => {
    const month = req.params.month;
    console.log(month);
    fetch('https://sholiday.faboul.se/dagar/v2.1/2022/' + month)
        .then((response) => response.json())
        .then((data) => {
            res.json(data);
        });
  });

  router.post('/', async (req, res) => {
    const body = req.body;
    res.json(body);
  })

  module.exports = router;
const express = require('express');
const {Buku} = require('../models')

const router = express.Router();

router.get('/buku', async (req, res) => {
  //populate dari propertinya
  const buku = await Buku.find({}, "-__v")
  
  try {
    res.send(buku)
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post('/buku', async (req, res) => {
  const buku = await Buku.create(req.body);
  console.log('post mbuku', buku);
  
  try {
    res.send(buku)
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
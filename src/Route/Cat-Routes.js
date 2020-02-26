const express = require('express');
const catExpress = express.Router();
const catList = require('../Data/Cat-Data');

catExpress.get('/', (req, res, next) => {
  if (catList.first === null)
    res.status(404).json({
      ok: false,
      message: 'Sorry, no more cats available'
    });
  else {
    return res.json(catList.first.value);
  }
});

catExpress.delete('/remove', (req, res, next) => {
  return res.status(200).json(catList.dequeue());
});

module.exports = catExpress;

const express = require('express');
const dogExpress = express.Router();
const dogList = require('../Data/Dog-Data');

dogExpress.get('/', (req, res, next) => {
  if (dogList.first === null)
    return res.status(404).json({
      ok: false,
      message: 'Sorry, no more dogs available'
    });
  else {
    return res.json(dogList.first.value);
  }
});

dogExpress.delete('/remove', (req, res, next) => {
 
  return res.status(200).json(dogList.dequeue());
});

module.exports = dogExpress;

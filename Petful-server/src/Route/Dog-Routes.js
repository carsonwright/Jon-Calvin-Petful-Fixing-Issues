const express = require("express");
const dogExpress = express.Router();
const dogList = require("../Data/Dog-Data");

dogExpress.get("/", (req, res, next) => {
  if (dogList.first === null)
    res.status(404).send("Sorry, no more dogs available");
  else {
    return res.json(dogList.first.value);
  }
});

dogExpress.delete("/remove", (req, res, next) => {
  dogList.dequeue();
  return res.status(204).json(dogList.first);
});

module.exports = dogExpress;

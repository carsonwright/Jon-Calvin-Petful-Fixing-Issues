const express = require("express");
const peopleExpress = express.Router();
const peopleList = require("../Data/People-Data");

// peopleExpress.get("/", (req, res, next) => {
//   if (peopleList.first === null)
//     res.status(404).send("Sorry, no more people available");
//   else {
//     return res.json(peopleList.first.value);
//   }
// });

peopleExpress.get("/", (req, res, next) => {
  return res.json(peopleList);
});

peopleExpress.delete("/remove", (req, res, next) => {
  peopleList.dequeue();
  return res.status(204).json(peopleList.first);
});

module.exports = peopleExpress;

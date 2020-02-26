const catList = require("./Cat-Data");
const dogList = require("./Dog-Data");
const peopleList = require("./People-Data");
const Queue = require("../Queue");

const instantiateLists = () => ({
  adoptACatList,
  adoptADogList,
  adopterList,
  adoptedPets: new Queue()
});
module.exports = instantiateLists;

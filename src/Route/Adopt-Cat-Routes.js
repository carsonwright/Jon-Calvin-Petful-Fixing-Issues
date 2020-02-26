// const adoptedPets = require("../Data/Adopt-Data");

adoptCatExpress.post("/", (req, res, next) => {
  if (adoptACatList.length <= 0) {
    res.status(404).send("Sorry, no more cats to adopt.");
  } else {
    const adoptedPet = adoptACatList.pop();
    adoptedPets.add(adoptedPet);
    return res.json(adoptedPet);
  }
});

module.exports = adoptCatExpress;

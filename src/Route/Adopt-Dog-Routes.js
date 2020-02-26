// const adoptedPets = require("../Data/Adopt-Data");

adoptDogExpress.post("/", (req, res, next) => {
  if (adoptADogList.length <= 0) {
    res.status(404).send("Sorry, no more dogs to adopt.");
  } else {
    const adoptedPet = adoptADogList.pop();
    adoptedPets.add(adoptedPet);
    return res.json(adoptedPet);
  }
});

module.exports = adoptDogExpress;

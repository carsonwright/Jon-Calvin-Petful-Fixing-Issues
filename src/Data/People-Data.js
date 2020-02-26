const Queue = require("../Queue");

let peopleList = new Queue();

peopleList.enqueue({
  id: 1,
  name: "Bethany",
  age: "1"
});
peopleList.enqueue({
  id: 2,
  name: "Calvin",
  age: "2"
});
peopleList.enqueue({
  id: 3,
  name: "Mandee",
  age: "3"
});
peopleList.enqueue({
  id: 4,
  name: "David",
  age: "4"
});
peopleList.enqueue({
  id: 5,
  name: "Skyler",
  age: "5"
});

module.exports = peopleList;

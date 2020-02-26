const Queue = require('../Queue');

let catList = new Queue();

catList.enqueue({
  imageURL:
    'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Mr. Sparkles',
  breed: 'homeless cat',
  age: '11',
  sex: 'F',
  description: 'this is one cool cat!',
  story: 'She\'s got a story! And she wants to tell you all about it right MEOW!'
});
catList.enqueue({
  imageURL:
    'https://images.all-free-download.com/images/graphiclarge/funny_cat_194619.jpg',
  imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Douglas',
  breed: 'homeless cat',
  age: '71',
  sex: 'M',
  description: 'The purrrrrfect companion!',
  story: 'Thrown out a window. But he landed on his feet!'
});
catList.enqueue({
  imageURL:
    'https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg',
  imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Meredith',
  breed: 'Alley Cat',
  age: '21',
  sex: 'F',
  description: 'Soft fur, gentle eyes.',
  story: 'She was in the case for the recent remake of the movie Cats, but chose to be homeless rather than admit this fact to anyone after seeing the rough cut of the film.'
});
catList.enqueue({
  imageURL:
    'https://images.squarespace-cdn.com/content/v1/5c6035de2727be28e9507335/1550415672380-JJTV0QYGSB1ST8EJC9XB/ke17ZwdGBToddI8pDm48kLtasAZl-PHCwtAW2yY90NJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI2csq_dZtO4yuZhlTSPtVUVrU6Yu01RDYsGwwWqbgdjcKMshLAGzx4R3EDFOm1kBS/cat.jpg',
  imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Kitty 4',
  breed: 'Brian Setzer',
  age: '73',
  sex: 'M',
  description: 'He does not mind chasing mice around',
  story: 'He was walking through the alley, looking for a fight, howling to the moon on a hot summer night when suddenly he was cat-napped by petty thieves.'
});

module.exports = catList;

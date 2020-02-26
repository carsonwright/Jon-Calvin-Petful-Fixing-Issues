const Queue = require('../Queue');

let dogList = new Queue();

dogList.enqueue({
  id: 1,
  imageURL:
    'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription:
    'A smiling golden-brown golden retreiver listening to music.',
  name: 'Winniefred',
  breed: 'Rottweiler',
  age: 5,
  sex: 'Female',
  description:
    'The sweetest of dogs, has been around kids and is very well behaved, she is always very relaxed! She would love to have a loving family who enjoys hanging out in a home and cuddling her',
  Story:
    'She\'s a half pure bred Rottweiler on her mothers side, and a half pure-bred German Shepard on her fathers side. She was brought in to be adopted because her family could not keep her due to neighbor complaints about their horses, even though she had done nothing wrong! She would love any kind and cuddly family no matter the size or other pets. She gets along with everyone!'
});
dogList.enqueue({
  id: 2,
  imageURL:
    'https://barkpost.com/wp-content/uploads/2015/06/sandyxoxkerry-600x600.jpg',
  imageDescription:
    'A smiling golden-brown golden retreiver listening to music.',
  name: 'Eve',
  breed: 'Rottweiler',
  age: 3,
  sex: 'Female',
  description:
    'A sweetheart of a dog. She will do any tricks you want for a treat. She does not like being yelled at, she won\'t hurt anybody but she will be very sad. She gets along with every other animal she\'s encountered. She loves kids and will lick them from head to toe with love and affection.',
  story:
    'An accident at a breeding company left this beautiful sweet puppy on our laps and we would love for her to find a happy and caring home. She likes sleeping next to someone in a bed, she\'s house trained, all you need to do is show her once where she needs to go and she\'ll take care of it from there. She\'s very quiet and doesn\'t bark unless spooked.'
});
dogList.enqueue({
  id: 3,
  imageURL:
    'https://i.ytimg.com/vi/sROV_Iw5grQ/hqdefault.jpg',
  imageDescription:
    'A smiling golden-brown golden retreiver listening to music.',
  name: 'Carrou',
  breed: 'Newfoundland',
  age: 11,
  sex: 'Male',
  description:
    'A black coated newfoundland, a bit old but young at heart, he still loves to play and has plenty of energy for playing fetch and going for walks. Will rescue children if he thinks they are drowning.',
  story:
    'This old feller loves to play in the water, loves going for long walks,.'
});

module.exports = dogList;

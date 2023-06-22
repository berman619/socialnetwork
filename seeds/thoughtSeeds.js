const mongoose = require('mongoose');
const Thought = require('../models/Thought');

mongoose.connect('mongodb://localhost/social-api', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const thoughtSeed = [
  {
    thoughtText: 'Here is a cool thought...',
    username: 'zachberger',
    reactions: []
  },
  {
    thoughtText: 'Here is another cool thought...',
    username: 'user2',
    reactions: []
  }
];

Thought.deleteMany({})
  .then(() => Thought.collection.insertMany(thoughtSeed))
  .then(data => {
    console.log(data.result.n + ' thought records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const mongoose = require('mongoose');
const Thought = require('../models/Thought');

mongoose.connect('mongodb://localhost/socialnetworkapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let thoughtData = [
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

  const seedThoughts = async () => {
    await Thought.deleteMany({});
    await Thought.insertMany(thoughtData);
  };
  
  module.exports = seedThoughts;
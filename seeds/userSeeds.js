const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb://localhost/socialnetworkapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let userData = [
  {
    username: 'zachberger',
    email: 'zachberger@gmail.com',
    thoughts: [],
    friends: []
  },
  {
    username: 'user2',
    email: 'user2@gmail.com',
    thoughts: [],
    friends: []
  }
];

const seedUsers = async () => {
    await User.deleteMany({});
    await User.insertMany(userData);
  };
  
module.exports = seedUsers;
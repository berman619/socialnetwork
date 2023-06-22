const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb://localhost/social-api', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const userSeed = [
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

User.deleteMany({})
  .then(() => User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + ' user records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

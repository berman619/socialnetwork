const mongoose = require('mongoose');

// Define the UserSchema
// fields for: 
    // username (string, unique, required, trimmed)
    // email (string, required, unique, must match a valid email address) 
        // use mongoose's match validation with regex
    // thoughts (array of _id values referencing the Thought model)
    // friends (array of _id values referencing the User model)

// Define a "friendCount" virtual
    // retrieves length of user's friends array on query
    // uses the .virtual() method on the UserSchema 
    // inside this method, calculate the length of the friends array

// Compile the UserSchema into a model and export it
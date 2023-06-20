const mongoose = require('mongoose');

// Define the ReactionSchema first. It's not a model but a subdocument schema. 
// Include fields for: 
    // reactionId (ObjectId, default value set to a new ObjectId)
    // reactionBody (string, required, 280 character maximum)
    // username (string, required)
    // createdAt (date, default value set to the current timestamp)

// To format the createdAt timestamp, use a getter method. 
// Define this getter in the ReactionSchema.

// Define the ThoughtSchema. Include fields for: 
    // thoughtText (string, required, must be between 1 and 280 characters)
    // createdAt (date, default value set to the current timestamp)
    // username (string, required)
    // reactions (array of nested documents created with the ReactionSchema)

// Use a getter method again to format the createdAt timestamp

// Define a virtual called reactionCount that retrieves 
// the length of the thought's reactions array field on query. 
// Use the .virtual() method on the ThoughtSchema 
// and inside this method calculate the length of the reactions array.

// Compile the ThoughtSchema into a model and export it.
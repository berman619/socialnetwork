// GET all users: 
    // Use the .find() method on the User model.

// GET a single user by its _id and populated thought and friend data: 
    // Use the .findOne() method with the id parameter.
    // To populate the thoughts and friends data, use the .populate() method.

// POST a new user: 
    // Use the .create() method with the request body as the argument.

// PUT to update a user by its _id: 
    // Use the .findOneAndUpdate() method with the id parameter and request body as the arguments.

// DELETE to remove user by its _id: 
    // Use the .findOneAndDelete() method with the id parameter as the argument. 
    // For the bonus part, find associated thoughts and delete them as well.
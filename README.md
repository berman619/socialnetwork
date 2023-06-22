# Social Network API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. It uses Express.js for routing, MongoDB as the NoSQL database, and the Mongoose ODM.

Here is a [video](https://drive.google.com/file/d/1Zm9d9L50MueSEfFcSe8WLslVrYmMC2nC/view?usp=sharing) of the application being used.

## Screenshot 

![Tech Blog Screenshot](/assets/socialnetworkapi.png)

## Installation
To use this API, make sure you have Node.js and MongoDB installed in your environment.

Follow these steps to set up the application:

1. Clone this repository.
2. Navigate to the repository folder on your local machine using the terminal.
3. Install the required dependencies using `npm install`.

## Usage
1. Ensure that MongoDB is running on your local machine.
2. In the terminal, navigate to the repository folder.
3. Start the server by running `npm start`.

## API Routes
The following API routes are available:

- `/api/users`
  - `GET`: Get all users
  - `GET /:userId`: Get a single user by ID
  - `POST`: Create a new user
  - `PUT /:userId`: Update a user by ID
  - `DELETE /:userId`: Delete a user by ID
  - `POST /:userId/friends/:friendId`: Add a new friend to a user's friend list
  - `DELETE /:userId/friends/:friendId`: Remove a friend from a user's friend list

- `/api/thoughts`
  - `GET`: Get all thoughts
  - `GET /:thoughtId`: Get a single thought by ID
  - `POST`: Create a new thought
  - `PUT /:thoughtId`: Update a thought by ID
  - `DELETE /:thoughtId`: Delete a thought by ID
  - `POST /:thoughtId/reactions`: Create a reaction for a thought
  - `DELETE /:thoughtId/reactions/:reactionId`: Delete a reaction from a thought

## Contributing 
Please send a message to me on [GitHub](https://www.github.com/berman619) or send an e-mail at zachhberger@gmail.com if you are interested in contributing.

## Tests
There are currently no tests available for this application. 

## License
This project is licensed under the terms of the [MIT](https://opensource.org/licenses/MIT) license.

## Questions
If you have any questions, please reach out to me via e-mail at zachhberger@gmail.com or on [GitHub](https://www.github.com/berman619).

## Credits
- [Zachary Berger](https://www.github.com/berman619)
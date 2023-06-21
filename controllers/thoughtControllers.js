const { Thought } = require('./models');

// /api/thoughts

module.exports = {
    async getThoughts(req, res) {
      try {
        const thoughts = await Thought.find()
        res.json(thoughts);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
    },

    async getSingleThought(req, res) {
        try {
          const thought = await User.findById(req.params.thoughtId)
          if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
          }
          res.json(user);
        } catch (error) {
          res.status(500).json({ message: 'Server error' });
        }
      },

      async createThought(req, res) {
        try {
          const dbThoughtData = await Thought.create(req.body);
          
          // Update the associated user's thoughts array
          const user = await User.findById(dbThoughtData.userId);
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
          user.thoughts.push(dbThoughtData._id);
          await user.save();
      
          res.json(dbThoughtData);
        } catch (error) {
          res.status(500).json({ message: 'Server error' });
        }
      }


// PUT to update a thought by its _id: Use the .findOneAndUpdate() method with the id parameter and request body as the arguments.

// DELETE to remove a thought by its _id: Use the .findOneAndDelete() method with the id parameter as the argument.

// /api/thoughts/:thoughtId/reactions

// POST to create a reaction stored in a single thought's reactions array field: Find the thought by id and update their reactions array to include the new reaction. You can use the .findOneAndUpdate() method with the thought id and reaction data as arguments.

// DELETE to pull and remove a reaction by the reaction's reactionId value: Find the thought by id and remove the reaction by its id from the reactions array.
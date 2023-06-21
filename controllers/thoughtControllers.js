const { Thought } = require('./models');

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
          const thought = await Thought.findById(req.params.thoughtId)
          if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
          }
          res.json(thought);
        } catch (error) {
          res.status(500).json({ message: 'Server error' });
        }
      },

      async createThought(req, res) {
        try {
          const dbThoughtData = await Thought.create(req.body);
          const user = await User.findById(req.body.userId);
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
          user.thoughts.push(dbThoughtData._id);
          await user.save();
          res.json(dbThoughtData);
        } catch (error) {
          res.status(500).json({ message: 'Server error' });
        }
      },

      async updateThought(req, res) {
        try {
          const updatedThought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            req.body,
            { new: true }
          );
    
          if (!updatedThought) {
            return res.status(404).json({ message: 'Thought not found' });
          }
    
          res.json(updatedThought);
        } catch (error) {
          res.status(500).json({ message: 'Server error' });
        }
      },

      async deleteThought(req, res) {
        try {
          const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
      
          if (!deletedThought) {
            return res.status(404).json({ message: 'Thought not found' });
          }
      
          const user = await User.updateOne(
            { thoughts: req.params.thoughtId },
            { $pull: { thoughts: req.params.thoughtId } }
          );
      
          res.json({ message: 'Thought deleted successfully' });
        } catch (error) {
          res.status(500).json({ message: 'Server error' });
        }
      },

      async createReaction(req, res) {
        try {
          const thoughtId = req.params.thoughtId;
          const { reactionBody, username } = req.body;
      
          const thought = await Thought.findById(thoughtId);
          if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
          }
      
          thought.reactions.push({ reactionBody, username });
          const updatedThought = await thought.save();
      
          res.json(updatedThought);
        } catch (error) {
          res.status(500).json({ message: 'Server error' });
        }
      },
      
      async deleteReaction(req, res) {
        try {
          const thought = await Thought.findById(req.params.thoughtId);
          if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
          }
      
          const reaction = thought.reactions.id(req.params.reactionId);
          if (!reaction) {
            return res.status(404).json({ message: 'Reaction not found' });
          }
      
          thought.reactions.pull({ _id: req.params.reactionId });
          const updatedThought = await thought.save();
      
          res.json(updatedThought);
        } catch (error) {
          res.status(500).json({ message: 'Server error' });
        }
      },
};
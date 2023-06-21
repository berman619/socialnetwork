const { User } = require('./models');

module.exports = {
    async getUsers(req, res) {
      try {
        const users = await User.find()
          .populate('friends')
          .populate('thoughts');
        res.json(users);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
    },
  
    async getSingleUser(req, res) {
      try {
        const user = await User.findById(req.params.userId)
          .populate('friends')
          .populate('thoughts');
  
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
  
        res.json(user);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
    },
  
    async createUser(req, res) {
      try {
        const dbUserData = await User.create(req.body);
        res.json(dbUserData);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
    },
  
    async updateUser(req, res) {
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.userId,
          req.body,
          { new: true }
        );
  
        if (!updatedUser) {
          return res.status(404).json({ message: 'User not found' });
        }
  
        res.json(updatedUser);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
    },
  
    async deleteUser(req, res) {
      try {
        const deletedUser = await User.findByIdAndDelete(req.params.userId);
  
        if (!deletedUser) {
          return res.status(404).json({ message: 'User not found' });
        }
  
        res.json({ message: 'User deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
    },

    async addFriend(req, res) {
      try {
        const user = await User.findById(req.params.userId);
  
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
  
        const friendId = req.body.friendId;
  
        if (user.friends.includes(friendId)) {
          return res
            .status(400)
            .json({ message: 'This user is already a friend' });
        }
  
        user.friends.push(friendId);
        const updatedUser = await user.save();
  
        res.json(updatedUser);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
    },
  
    async deleteFriend(req, res) {
      try {
        const user = await User.findById(req.params.userId);
  
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
  
        const friendId = req.body.friendId;
  
        if (!user.friends.includes(friendId)) {
          return res
            .status(400)
            .json({ message: 'This user is not a friend' });
        }
  
        user.friends = user.friends.filter(
          (friend) => friend.toString() !== friendId
        );
  
        const updatedUser = await user.save();
  
        res.json(updatedUser);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
    },
  };
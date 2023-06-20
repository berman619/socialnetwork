const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: 'Username is required', trim: true },
    email: { type: String, unique: true, required: 'Email address is required', match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User'}]
})

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
    });

const User = mongoose.model('user', userSchema);

module.exports = User;
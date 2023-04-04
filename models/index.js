const User = require('./User');
const Post = require('./Post');

// Post belongsTo User
Post.belongsTo(User, {
    foreignKey: 'user_id',
})

// Users have many Posts
User.hasMany(Post, {
    foreignKey: 'post_id',
})

module.exports = { User, Post };

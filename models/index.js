const User = require('./User');
const Post = require('./Post');

// Users have many Posts
User.hasMany(Post, {
    foreignKey: 'post_id',
})

// Post belongsTo User
Post.belongsTo(User, {
    foreignKey: 'user_id',
})



module.exports = { User, Post };

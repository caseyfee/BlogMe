const { Post } = require('../models');

const postData =
[
  {
    "title": "Sal",
    "content": "sal says good job"
  },
  {
    "title": "Sal",
    "content": "sal says good job again"
  },
  {
    "title": "Amiko",
    "content": "Amiko says good job"
  },
  {
    "title": "Jordan",
    "content": "Jordan says good job"
  },
  {
    "title": "Blake",
    "content": "Blake says good job"
  }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
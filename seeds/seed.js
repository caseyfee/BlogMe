const sequelize = require('../config/connection');
const { User } = require('../models');
const { Post } = require('../models');

const userData = require('./userData');
const postData = require('./postData');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

const seedPostContent = async () => {
  await sequelize.sync({ force: true });

  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
seedPostContent();

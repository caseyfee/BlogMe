// const sequelize = require('../config/connection');
// const { User } = require('../models');
// const { Post } = require('../models');

// const userData = require('./userData.json');
// const postData = require('./postData.json');


// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const post of postData) {
//     await Post.create({
//       ...post,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     })
//   }

//   process.exit(0);
// };

const sequelize = require('../config/connection.js');
const { User } = require('../models');
const { Post } = require('../models');

const userData = require('./user-seeds.json');
const postData = require('./post-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  for (const post of postData) {
    await Post.create({
        ...post, 
        user_id: users[Math.floor(Math.random() * users.length)].id
    })
  }

  process.exit(0);
};

seedDatabase();

// const seedPostContent = async () => {
//   await sequelize.sync({ force: true });

//   await Post.bulkCreate(postData, {
//     individualHooks: true,
//     returning: true,
//   });

//   process.exit(0);
// };

// seedDatabase();
// seedPostContent();

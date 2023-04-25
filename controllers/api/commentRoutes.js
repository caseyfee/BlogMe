const router = require('express').Router();
const { Comment, Post } = require('../../models');
const withAuth = require('../../utils/auth');

// adding comments ALREADY ADDED IN THE POSTROUTES
router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        content: req.body.content,
        user_id: req.session.user_id,
        post_id: req.params.id,
        date_created: new Date()
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;

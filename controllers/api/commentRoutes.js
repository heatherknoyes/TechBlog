// const router = require('express').Router();
// const { Comment } = require('../../models');
// const withAuth = require('../../utils/auth');

// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newPost = await Comment.create({
//       ...req.body,
//       userId: req.session.user_id,
//       // need to put in the post id here?
//     });

//     res.status(200).json(newPost);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

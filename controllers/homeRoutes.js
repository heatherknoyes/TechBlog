const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');
const format_date = require('../utils/helpers');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    // Serialize data so the template can read it
    const user = userData.get({ plain: true });
    res.render('dashboard', {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/create-blog', (req, res) => {
  res.render('create-blog', {
    logged_in: true,
  });
});

router.get('/edit-blog/:id', withAuth, async (req, res) => {
  // Need to get the individual blog post id of the button clicked
  const userData = await Post.findByPk(req.params.id, {
    include: [
      { model: Comment, include: { model: User, attributes: ['username'] } },
    ],
  });
  // Serialize data so the template can read it
  const user = userData.get({ plain: true });
  res.render('edit-blog', {
    ...user,
    logged_in: req.session.logged_in,
  });
});

router.get('/blogs/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        { model: Comment, include: { model: User, attributes: ['username'] } },
      ],
    });

    const blog = postData.get({ plain: true });

    res.render('blog-page', {
      ...blog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;

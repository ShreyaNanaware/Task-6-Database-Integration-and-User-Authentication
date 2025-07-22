const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const router = express.Router();

router.get('/register', (req, res) => res.render('register'));

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await User.create({ username, password: hash });
  res.redirect('/login');
});

router.get('/login', (req, res) => res.render('login'));

router.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.send('Invalid username');
  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match) return res.send('Invalid password');
  req.session.userId = user._id;
  res.redirect('/form');
});

router.get('/form', (req, res) => {
  if (!req.session.userId) return res.redirect('/login');
  res.render('form');
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/login'));
});

module.exports = router;

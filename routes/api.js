const express = require('express');
const FormData = require('../models/FormData');
const router = express.Router();

function isAuth(req, res, next) {
  if (!req.session.userId) return res.status(401).send('Unauthorized');
  next();
}

router.post('/submit', isAuth, async (req, res) => {
  await FormData.create({ userId: req.session.userId, message: req.body.message });
  res.send('✅ Form data saved!');
});

router.get('/mydata', isAuth, async (req, res) => {
  const data = await FormData.find({ userId: req.session.userId });
  res.json(data);
});

module.exports = router;

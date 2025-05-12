// backend/routes/authRoutes.js
const express  = require('express');
const bcrypt   = require('bcrypt');
const jwt      = require('jsonwebtoken');
const User     = require('../models/User');
const logger   = require('../utils/logger');

const router = express.Router();

// POST /api/auth/register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // hash password
    const hash = await bcrypt.hash(password, 10);
    // create user
    const user = await User.create({ name, email, password: hash });
    await logger("User Registered", user.email);

    // sign JWT (same payload & secret)
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // return it
    res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    res.status(400).json({ msg: 'Registration failed' });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const match = user && await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ msg: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  await logger("User Login", email);
  res.json({ token });
});

module.exports = router;

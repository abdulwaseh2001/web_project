// backend/routes/userRoutes.js
const express    = require('express');
const auth       = require('../middleware/authMiddleware');
const User       = require('../models/User');
const router     = express.Router();

// GET  /api/users/profile
router.get('/profile', auth, async (req, res) => {
  const u = await User.findById(req.user.id).select('-password');
  res.json(u);
});

// PUT  /api/users/profile
router.put('/profile', auth, async (req, res) => {
  const { name, bio } = req.body;
  const u = await User.findByIdAndUpdate(
    req.user.id,
    { name, bio },
    { new: true }
  ).select('-password');
  res.json(u);
});

// GET  /api/users/wishlist
router.get('/wishlist', auth, async (req, res) => {
  const u = await User.findById(req.user.id).populate('wishlist');
  res.json(u.wishlist);
});

// POST /api/users/wishlist
router.post('/wishlist', auth, async (req, res) => {
  const { assetId } = req.body;
  const u = await User.findById(req.user.id);
  if (!u.wishlist.includes(assetId)) {
    u.wishlist.push(assetId);
    await u.save();
  }
  res.json({ success: true });
});

module.exports = router;
// backend/controllers/adminController.js
import User from '../models/User.js';

// GET /api/admin/users
export const listUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};

// POST /api/admin/users/role
export const updateUserRole = async (req, res) => {
  const { userId, role } = req.body;
  const u = await User.findByIdAndUpdate(userId, { role }, { new: true });
  res.json(u);
};

// POST /api/admin/users/block
export const toggleBlockUser = async (req, res) => {
  const { userId, block } = req.body;
  const u = await User.findByIdAndUpdate(userId, { isBlocked: block }, { new: true });
  res.json(u);
};

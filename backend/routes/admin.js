const express = require('express');
const router = express.Router();

const {
  listUsers,
  updateUserRole,
  toggleBlockUser
} = require('../controllers/adminController');

const { authorizeRoles } = require('../middleware/roleMiddleware'); // ✅ right import
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware, authorizeRoles('admin'));

router.get('/users', listUsers);
router.post('/users/role', updateUserRole);
router.post('/users/block', toggleBlockUser);

module.exports = router;

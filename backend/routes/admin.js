// backend/routes/admin.js
import express from 'express';
import { listUsers, updateUserRole, toggleBlockUser } from '../controllers/adminController.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();
router.use(authMiddleware, authorizeRoles('admin'));

router.get('/users', listUsers);
router.post('/users/role', updateUserRole);
router.post('/users/block', toggleBlockUser);

export default router;

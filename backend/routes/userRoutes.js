const express = require('express');
const router = express.Router();
const { followWriter, addFavorite, getProfile } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/profile', protect, getProfile);
router.post('/follow/:id', protect, followWriter);
router.post('/favorite/:id', protect, addFavorite);

module.exports = router;

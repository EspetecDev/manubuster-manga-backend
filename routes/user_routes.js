const express = require('express');
const router = express.Router();
const cors = require('cors');
const {
    registerUser, loginUser, getMe, recoverPassword, checkAndResetPassword
} = require('../controllers/user_controller');
const { protect } = require('../middleware/auth_middleware');

router.route('/login').post(cors(), loginUser);
router.route('/signup').post(cors(), registerUser);
router.route('/me').get(protect, cors(), getMe);
router.route('/recoverPassword').post(cors(), recoverPassword);
router.route('/recoverPassword/:token').post(cors(), checkAndResetPassword);

module.exports = router;
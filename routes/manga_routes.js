const express = require('express');
const router = express.Router();
const cors = require('cors');
const {
    getAllManga, 
    getUserMangaCollection, addUserManga,
    getUserManga, deleteUserManga, updateUserManga,
    queryManga
} = require('../controllers/manga_controller');
const { protect } = require('../middleware/auth_middleware');

router.route('/').get(cors(), getAllManga);
// router.route('/query/:searchQuery').get(protect, cors(), queryManga);
// router.route('/userManga').get(protect, cors(), getUserMangaCollection).post(protect, cors(), addUserManga);
// router.route('/userManga/:id').get(protect, cors(), getUserManga).delete(protect, cors(), deleteUserManga).put(protect, cors(), updateUserManga)

module.exports = router;
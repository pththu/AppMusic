const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.put('/update/:id', postController.updatePost);
router.delete('/remove/:id', postController.deletePost);
router.get('/mine', postController.getPostByMe);
router.get('/:id', postController.getPostById);
router.get('/', postController.getAllPost);
router.post('/', postController.createPost);
router.get('/search/:userId', postController.getPostByUserId);

module.exports = router;
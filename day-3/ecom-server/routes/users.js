const express = require('express');

const userController = require('../controller/user');

const router = express.Router();

router.get('/', userController.get);

// Create user
router.post('/', userController.create);

// Update an existing user
router.put('/:id', userController.update);

// Delete a user
router.delete('/:id', userController.remove);

module.exports = router;
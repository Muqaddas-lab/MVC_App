const express = require('express');
const router = express.Router();
const controller = require('../controllers/todocontrollers');

router.get('/todos', controller.getTodos);
router.post('/todos', controller.createTodo);

module.exports = router;

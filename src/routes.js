const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/', controller.getTasks);
router.get('/:id', controller.getTaskById);
router.get('/status/:status', controller.getTasksByStatus);
router.get('/priority/:priority', controller.getTasksByPriority);

router.post('/', controller.addTask);

router.delete('/:id', controller.deleteTask);

module.exports = router;
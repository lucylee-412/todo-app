const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/', controller.getTasks);
router.get('/:id', controller.getTaskById);
router.get('/status/:status', controller.getTasksByStatus);
router.get('/priority/:priority', controller.getTasksByPriority);

router.post('/', controller.addTask);

// router.put('/update/description/:id', controller.updateDescription);
// router.put('/update/priority/:id', controller.updatePriority);
// router.put('/update/status/:id', controller.updateStatus);

router.patch('/update/:id', controller.updateTask);

router.delete('/delete/:id', controller.deleteTask);

module.exports = router;
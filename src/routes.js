const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/', controller.getTasks);
router.get('/:id', controller.getTaskById);
router.get('/completed/:completed', controller.getStatus);

module.exports = router;


import express from 'express';

const router = express.Router();

const todoController = require('../controllers/todoController');

router.route('/show-todo').get(todoController.show);
router.route('/add-todo').post(todoController.add);
router.route('/remove-todo/:id').delete(todoController.remove);
router.route('/update-todo/:id').put(todoController.update);


module.exports = router;
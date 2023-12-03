
// express
import express from 'express';

// router from express
const router = express.Router();

// controller file
const todoController = require('../controllers/todoController');


// greeting route
router.route('/').get(todoController.greet);
// to show list of all the todos
router.route('/show-todo').get(todoController.show);
// for adding a new todo
router.route('/add-todo').post(todoController.add);
// for removing a todo from list
router.route('/remove-todo/:id').delete(todoController.remove);
// for updating the status of todo in list
router.route('/update-todo/:id').put(todoController.update);

// export the router
module.exports = router;
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const todoController = require('../controllers/todoController');
router.route('/show-todo').get(todoController.show);
router.route('/add-todo').post(todoController.add);
router.route('/remove-todo/:id').delete(todoController.remove);
router.route('/update-todo/:id').put(todoController.update);
module.exports = router;

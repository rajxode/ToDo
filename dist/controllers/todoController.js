"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Todo model
const Todo = require('../models/Todo');
// controller for showing greeting message 
module.exports.greet = (req, res) => {
    // response 
    return res.status(200).json({
        success: true,
        message: 'Hello World, Greetings !!!'
    });
};
// controller for showing list of all the todos in Database
module.exports.show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // getting all the todos
        const todos = yield Todo.find({});
        // return response
        return res.status(200).json({
            success: true,
            todos
        });
    }
    catch (error) {
        // error
        return res.status(500).json({
            message: error.message
        });
    }
});
// controller for adding a new todo in list
module.exports.add = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // todo data from request
        const { name, status } = req.body;
        // create a new todo
        const todo = yield Todo.create({
            name,
            status
        });
        // return response
        return res.status(201).json({
            success: true,
            message: 'Todo Added'
        });
    }
    catch (error) {
        // error
        return res.status(500).json({
            message: error.message
        });
    }
});
// controller to delete a todo from list
module.exports.remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // id of todo to be deleted
        const { id } = req.params;
        // find by id and delete the todo from DB
        yield Todo.findByIdAndDelete(id);
        // response
        return res.status(200).json({
            success: true,
            message: 'Todo Removed'
        });
    }
    catch (error) {
        // error
        return res.status(500).json({
            message: error.message
        });
    }
});
// update a todo in list
module.exports.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // id of todo to be updated
        const { id } = req.params;
        // find todo and update
        const todo = yield Todo.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });
        // return reponse 
        return res.status(200).json({
            success: true,
            message: 'Todo Updated',
        });
    }
    catch (error) {
        // error
        return res.status(500).json({
            message: error.message
        });
    }
});

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
const Todo = require('../models/Todo');
module.exports.greet = (req, res) => {
    return res.status(200).json({
        success: true,
        message: 'Hello World, Greetings !!!'
    });
};
module.exports.show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield Todo.find({});
        return res.status(200).json({
            success: true,
            todos
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
module.exports.add = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, status } = req.body;
        const todo = yield Todo.create({
            name,
            status
        });
        return res.status(201).json({
            success: true,
            message: 'Todo Added'
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
module.exports.remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield Todo.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: 'Todo Removed'
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
module.exports.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todo = yield Todo.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });
        return res.status(200).json({
            success: true,
            message: 'Todo Updated',
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

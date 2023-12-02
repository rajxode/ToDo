"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const todoSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the name of todo']
    },
    status: {
        type: String,
        required: [true, 'Please select the status'],
        enum: {
            values: [
                // different values of status
                'done',
                'not done',
            ],
            // if user give a value other than the above mentioned values then show following message
            message: "Please select status values ONLY between 'done' and 'not done'"
        },
        default: 'not done'
    },
}, {
    timestamps: true
});
const Todo = mongoose_1.default.model('Todo', todoSchema);
module.exports = Todo;

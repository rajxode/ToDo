"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// mongoose  
const mongoose_1 = __importDefault(require("mongoose"));
// schema to store todo
const todoSchema = new mongoose_1.default.Schema({
    // name of todo
    name: {
        type: String,
        required: [true, 'Please enter the name of todo']
    },
    // status of todo
    status: {
        type: String,
        required: [true, 'Please select the status'],
        // values for status
        enum: {
            values: [
                'done',
                'not done',
            ],
            // if user give a value other than the above mentioned values then show following message
            message: "Please select status values ONLY between 'done' and 'not done'"
        },
        // default value of status
        default: 'not done'
    },
}, {
    // time of creation and update
    timestamps: true
});
// creating model from schema
const Todo = mongoose_1.default.model('Todo', todoSchema);
// export the model
module.exports = Todo;

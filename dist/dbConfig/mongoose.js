"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// mongoose
const mongoose_1 = __importDefault(require("mongoose"));
// function to connect with database
const connect = () => {
    mongoose_1.default.connect(process.env.MONGO_URL)
        .then(() => console.log('Db connected'))
        .catch((error) => {
        console.log('Error in DB connection');
        console.log(error);
        process.exit();
    });
};
module.exports = connect;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// mongoose
const mongoose_1 = __importDefault(require("mongoose"));
// function to connect with database
const connect = () => {
    // connect with database
    mongoose_1.default.connect(process.env.MONGO_URL)
        // connection established
        .then(() => console.log('Db connected'))
        // error in DB connection
        .catch((error) => {
        // show message
        console.log('Error in DB connection');
        // error
        console.log(error);
        process.exit();
    });
};
// export the function
module.exports = connect;

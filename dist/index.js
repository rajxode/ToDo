"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// express 
const express_1 = __importDefault(require("express"));
// for environment variables
const dotenv_1 = __importDefault(require("dotenv"));
// for swagger docs
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
// for writing swagger docs 
const yamljs_1 = __importDefault(require("yamljs"));
// function to connect with DB
const connect = require('./dbConfig/mongoose');
// env variables
dotenv_1.default.config();
// app from express
const app = (0, express_1.default)();
// port
const PORT = process.env.PORT;
// connect with DB
connect();
// swagger file
const swaggerDocument = yamljs_1.default.load('./swagger.yaml');
// rendering the swagger file
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
// middlewares for json and url data
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true
}));
// for routes files
app.use('/', require('./routes/index'));
// fire up the server
app.listen(PORT, () => console.log(`server running on port: ${PORT}`));

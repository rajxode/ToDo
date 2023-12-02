"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const connect = require('./dbConfig/mongoose');
dotenv_1.default.config();
const app = (0, express_1.default)();
connect();
const swaggerDocument = yamljs_1.default.load('./swagger.yaml');
// rendering the swagger file
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true
}));
app.use('/', require('./routes/index'));
app.listen(PORT, () => console.log(`server running on port: ${PORT}`));

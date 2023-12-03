"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// express
const express_1 = __importDefault(require("express"));
// router
const router = express_1.default.Router();
// home route
router.get('/', (req, res) => {
    return res.send('<h1>Please, Visit /api-docs to see the api documentations</h1>');
});
// for api related routes
router.use('/api/v1', require('./api-route'));
// export route
module.exports = router;

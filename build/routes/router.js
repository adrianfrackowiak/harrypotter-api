"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("../controllers/controller"));
const router = express_1.default.Router();
router.get('/', controller_1.default.home);
router.get('/books', controller_1.default.books);
router.get('/houses', controller_1.default.houses);
module.exports = router;

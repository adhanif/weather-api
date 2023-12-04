"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 8080;
const MONGODB_URL = process.env.NODE_ENV
    ? process.env.TEST_MONGODB_URL
    : process.env.DB_URL;
exports.default = { PORT, MONGODB_URL };

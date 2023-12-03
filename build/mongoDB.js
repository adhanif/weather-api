"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const config_1 = __importDefault(require("./utils/config"));
mongoose
    .connect(config_1.default.MONGODB_URL)
    .then(() => {
    console.log("Successfully connect to MongoDB.");
})
    .catch((err) => {
    console.error("Connection error", err);
    process.exit();
});

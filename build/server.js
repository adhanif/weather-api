"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./mongoDB");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const favouritesRoute_1 = __importDefault(require("./routes/favouritesRoute"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const config_1 = __importDefault(require("./utils/config"));
const app = (0, express_1.default)();
// const cors = require("cors");
const corsOptions = {
    origin: [
        "http://localhost:8081",
        "https://personal-weather-station.netlify.app",
    ],
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use((0, cookie_parser_1.default)());
app.get("/", (_req, res) => {
    res.send("NodeJS + Express + Typescript App Up Weather app! 👍");
});
app.use("/api/weather/favourites", favouritesRoute_1.default);
app.listen(config_1.default.PORT, () => {
    console.log(`Server running on port http://localhost:${config_1.default.PORT}`);
});

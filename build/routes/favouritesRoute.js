"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const favouritesRouter = express_1.default.Router();
const favouritesController_1 = require("../controllers/favouritesController");
const verifyToken_1 = require("../middlewares/verifyToken");
favouritesRouter.post("/", verifyToken_1.verfiyToken, favouritesController_1.addFavourites);
favouritesRouter.get("/", verifyToken_1.verfiyToken, favouritesController_1.getFavouritesOfUser);
favouritesRouter.delete("/:id", verifyToken_1.verfiyToken, favouritesController_1.deleteOneFavourite);
exports.default = favouritesRouter;

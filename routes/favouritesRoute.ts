import express from "express";
const favouritesRouter = express.Router();
import { getFavouritesOfUser, addFavourites } from "../controllers/favouritesController";

import { verfiyToken } from "../middlewares/verifyToken";

favouritesRouter.post("/", verfiyToken, addFavourites);
favouritesRouter.get("/", verfiyToken, getFavouritesOfUser);

export default favouritesRouter;

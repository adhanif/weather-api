import express from "express";
const favouritesRouter = express.Router();
import { getFavourites } from "../controllers/favouritesController";

import { verfiyToken } from "../middlewares/verifyToken";

favouritesRouter.get("/favourites", verfiyToken, getFavourites);

export default favouritesRouter;

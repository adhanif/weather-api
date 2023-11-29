import express from "express";
const favouritesRouter = express.Router();
import {
  getFavouritesOfUser,
  addFavourites,
  deleteOneFavourite,
} from "../controllers/favouritesController";

import { verfiyToken } from "../middlewares/verifyToken";

favouritesRouter.post("/", verfiyToken, addFavourites);
favouritesRouter.get("/", verfiyToken, getFavouritesOfUser);
favouritesRouter.delete("/:id", verfiyToken, deleteOneFavourite);

export default favouritesRouter;

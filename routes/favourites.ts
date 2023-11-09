import express from "express";
const favouritesRouter = express.Router();

favouritesRouter.get("/", (_req, res) => {
  try {
    res.json("It is favourites route");
  } catch (error: unknown) {
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.status(400).send({ error: errorMessage });
  }
});

export default favouritesRouter;

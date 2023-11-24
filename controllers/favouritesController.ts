import express from "express";

export const getFavourites = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    res.json("It is favourites route");
  } catch (error: unknown) {
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.status(400).send({ error: errorMessage });
  }
};

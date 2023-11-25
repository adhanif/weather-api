import express from "express";
import { Favourites } from "../models/favouriteSchema";

export const addFavourites = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    console.log(req.body);
    const { cityname } = req.body;
    const { id } = (req as any).user;
    const newFavourite = await Favourites.create({
      cityname,
      creater: id,
    });
    res.status(201).json(newFavourite);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.status(400).send({ error: errorMessage });
  }
};

export const getFavouritesOfUser = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = (req as any).user;
  try {
    const getFavourites = await Favourites.find({ creater: id });
    res.status(201).json(getFavourites);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.status(400).send({ error: errorMessage });
  }
};

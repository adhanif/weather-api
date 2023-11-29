import express from "express";
import { Favourites } from "../models/favouriteSchema";

// Favourites.collection.createIndexes({ cityname: "text" } as any);

export const addFavourites = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { cityname, coordinates } = req.body;
    const { id } = (req as any).user;

    const alreadyFavourite = await Favourites.findOne({
      $text: { $search: `${cityname}` },
      creater: id,
    });

    if (!alreadyFavourite) {
      const newFavourite = await Favourites.create({
        cityname,
        creater: id,
        coordinates,
      });
      res.status(200).json(newFavourite);
    } else {
      res
        .status(400)
        .json({ error: "You have already added to your favourites" });
    }
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

export const deleteOneFavourite = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const result = await Favourites.deleteOne({ _id: id });

    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Favourite deleted successfully" });
    } else {
      res.status(404).json({ error: "Favourite not found" });
    }
  } catch (error: unknown) {
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.status(400).send({ error: errorMessage });
  }
};

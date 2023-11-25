import express from "express";
import { Favourites } from "../models/favouriteSchema";

export const addFavourites = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { cityname } = req.body;
    const { id } = (req as any).user;

    // console.log(cityname, id);
    const alreadyFavourite = await Favourites.findOne({ cityname });

    if (!alreadyFavourite) {
      const newFavourite = await Favourites.create({ cityname, creater: id });
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
  const { id } = req.params;
  const result = await Favourites.deleteOne({ _id: id });

  if (result.deletedCount === 1) {
    res.status(200).json({ message: "Favourite deleted successfully" });
  } else {
    res.status(404).json({ error: "Favourite not found" });
  }

  try {
    // const getFavourites = await Favourites.find({ creater: id });
    // res.status(201).json(getFavourites);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.status(400).send({ error: errorMessage });
  }
};

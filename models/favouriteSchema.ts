import mongoose from "mongoose";
import { IFavouriteCityWeather } from "../types";

const favouriteCityWeatherSchema = new mongoose.Schema<IFavouriteCityWeather>({
  cityname: { type: String, required: true },
  creater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Favourites = mongoose.model<IFavouriteCityWeather>(
  "City",
  favouriteCityWeatherSchema
);

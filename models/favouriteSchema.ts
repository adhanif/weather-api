import mongoose from "mongoose";
import { IFavouriteCityWeather } from "../types";

const favouriteCityWeatherSchema = new mongoose.Schema<IFavouriteCityWeather>({
  cityname: { type: String, required: false },
  coordinates: {
    type: [Number],
    required: false,
  },
  creater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Favourites = mongoose.model<IFavouriteCityWeather>(
  "City",
  favouriteCityWeatherSchema
);

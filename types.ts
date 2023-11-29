import { Types } from "mongoose";

export interface UserInterface {
  username: string;
  email: string;
  password: string;
}

export interface IFavouriteCityWeather {
  cityname: string;
  coordinates: number[];
  creater: Types.ObjectId | string;
}

import mongoose from "mongoose";
import { UserInterface } from "../types";

const userSchema = new mongoose.Schema<UserInterface>({
  username: { type: String, required: true },
  email: { type: String },
  password: { type: String, required: true, select: false },
});

export const User = mongoose.model<UserInterface>("User", userSchema);

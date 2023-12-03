const mongoose = require("mongoose");
import config from "./utils/config";

mongoose
  .connect(config.MONGODB_URL)
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err: Error) => {
    console.error("Connection error", err);
    process.exit();
  });

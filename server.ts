require("./mongoDB");
import express from "express";
import favouritesRouter from "./routes/favourites";
import config from "./utils/config";

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("NodeJS + Express + Typescript App Up Weather app! 👍");
});

app.use("/api/favourites", favouritesRouter);

app.listen(config.PORT, () => {
  console.log(`Server running on port http://localhost:${config.PORT}`);
});

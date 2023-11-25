require("./mongoDB");
import express from "express";
import favouritesRouter from "./routes/favouritesRoute";
import cookieParser from "cookie-parser";
import config from "./utils/config";

const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:8081",
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.get("/", (_req, res) => {
  res.send("NodeJS + Express + Typescript App Up Weather app! 👍");
});

app.use("/api/weather/favourites", favouritesRouter);

app.listen(config.PORT, () => {
  console.log(`Server running on port http://localhost:${config.PORT}`);
});

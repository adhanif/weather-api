import express from "express";
import favouritesRouter from "./routes/favourites";

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/", (_req, res) => {
  res.send("NodeJS + Express + Typescript App Up Weather app! 👍");
});

app.use("/api/favourites", favouritesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

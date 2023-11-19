import dotenv from "dotenv";

require("./mongoDB");
import express from "express";
//import WebSocket from "ws";
//import { createServer } from "http";
//import { Server as WebSocketServer } from "ws";
import favouritesRouter from "./routes/favourites";
import config from "./utils/config";
//import authMiddleware from "./middlewares/authMiddleware";
import cors from "cors";
import { setupWebSocket } from "./webSocket";
//import * as http from "http";
//import jwt from "jsonwebtoken";
//import * as url from "url";

dotenv.config(); // Load environment variables from .env file
const app = express();
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.use(express.json());

//const JWT_SECRET = process.env.JWT_SECRET as string;

// Middleware to verify JWT token
//app.use(authMiddleware(JWT_SECRET));

/*
const server = createServer(app);
const wss = new WebSocketServer({ server });

// Mock temperature data generator
const generateTemperatureData = () => {
  return (Math.random() * 50 + 50).toFixed(2); // Generates a random temperature between 50°F and 100°F
};

// WebSocket connections handling
wss.on("connection", (ws: WebSocket, request: http.IncomingMessage) => {
  let token: string | null = null;
  console.log("hello web socket");
  if (request.url != null) {
    const parsedUrl: url.UrlWithStringQuery = url.parse(request.url);
    token = parsedUrl.query;
    console.log(token);
    if (!token) {
      ws.close();
      return;
    }
  }

  const sendTemperature = () => {
    const temperature = generateTemperatureData();
    ws.send(JSON.stringify({ temperature, timestamp: new Date() }));
  };
  let temperatureInterval: NodeJS.Timeout;
  try {
    jwt.verify((token as string).split(" ")[1], JWT_SECRET);
    // Token is valid, proceed with WebSocket connection handling
    temperatureInterval = setInterval(sendTemperature, 3600000);
    // Send temperature data every hour
  } catch (error) {
    ws.close();
    console.error("Invalid token");
  }

  // Handle WebSocket closing
  ws.on("close", () => {
    clearInterval(temperatureInterval);
  });
});
*/

// Error handling middleware
app.use(
  (
    err: any,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  },
);

app.get("/", (_req, res) => {
  res.send("NodeJS + Express + Typescript App Up Weather app! 👍");
});

app.use("/api/favourites", favouritesRouter);

const server = app.listen(config.PORT, () => {
  console.log(`Server running on port http://localhost:${config.PORT}`);
});

setupWebSocket(server);

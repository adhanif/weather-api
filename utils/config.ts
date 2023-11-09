import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8081;

const MONGODB_URL =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URL
    : process.env.DB_URL;

export default { PORT, MONGODB_URL };

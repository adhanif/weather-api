import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (secret: string) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const token = req.header("Authorization");
    console.log("token received");
    if (!token) {
      return next({ message: "Unauthorized - Missing token" });
    }

    try {
      jwt.verify(token, secret);
      next();
    } catch (error) {
      next({ message: "Unauthorized - Invalid token" });
    }
  };
};

export default authMiddleware;

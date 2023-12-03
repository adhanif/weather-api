"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verfiyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verfiyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const JWT_SECRET = process.env.SECRET || "";
        const token = req.cookies.access_token;
        if (token) {
            const payload = jsonwebtoken_1.default.verify(token, JWT_SECRET);
            req.user = payload;
            next();
        }
        else {
            res.status(403).json({ error: "Forbidden unauthroized !!!" });
        }
    }
    catch (error) {
        let errorMessage = "Something went wrong";
        if (error instanceof Error) {
            errorMessage += error.message;
        }
        res.status(400).json({ error: errorMessage });
    }
});
exports.verfiyToken = verfiyToken;
//# sourceMappingURL=verifyToken.js.map
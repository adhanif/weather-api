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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneFavourite = exports.getFavouritesOfUser = exports.addFavourites = void 0;
const favouriteSchema_1 = require("../models/favouriteSchema");
// Favourites.collection.createIndexes({ cityname: "text" } as any);
const addFavourites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cityname, coordinates } = req.body;
        const { id } = req.user;
        const alreadyFavourite = yield favouriteSchema_1.Favourites.findOne({
            $text: { $search: `${cityname}` },
            creater: id,
        });
        if (!alreadyFavourite) {
            const newFavourite = yield favouriteSchema_1.Favourites.create({
                cityname,
                creater: id,
                coordinates,
            });
            res.status(200).json(newFavourite);
        }
        else {
            res
                .status(400)
                .json({ error: "You have already added to your favourites" });
        }
    }
    catch (error) {
        let errorMessage = "Something went wrong";
        if (error instanceof Error) {
            errorMessage += error.message;
        }
        res.status(400).send({ error: errorMessage });
    }
});
exports.addFavourites = addFavourites;
const getFavouritesOfUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    try {
        const getFavourites = yield favouriteSchema_1.Favourites.find({ creater: id });
        res.status(201).json(getFavourites);
    }
    catch (error) {
        let errorMessage = "Something went wrong";
        if (error instanceof Error) {
            errorMessage += error.message;
        }
        res.status(400).send({ error: errorMessage });
    }
});
exports.getFavouritesOfUser = getFavouritesOfUser;
const deleteOneFavourite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield favouriteSchema_1.Favourites.deleteOne({ _id: id });
        if (result.deletedCount === 1) {
            res.status(200).json({ message: "Favourite deleted successfully" });
        }
        else {
            res.status(404).json({ error: "Favourite not found" });
        }
    }
    catch (error) {
        let errorMessage = "Something went wrong";
        if (error instanceof Error) {
            errorMessage += error.message;
        }
        res.status(400).send({ error: errorMessage });
    }
});
exports.deleteOneFavourite = deleteOneFavourite;

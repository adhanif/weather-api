"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favourites = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const favouriteCityWeatherSchema = new mongoose_1.default.Schema({
    cityname: { type: String, required: false },
    coordinates: {
        type: [Number],
        required: false,
    },
    creater: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
});
favouriteCityWeatherSchema.index({ cityname: "text" });
exports.Favourites = mongoose_1.default.model("City", favouriteCityWeatherSchema);
//# sourceMappingURL=favouriteSchema.js.map
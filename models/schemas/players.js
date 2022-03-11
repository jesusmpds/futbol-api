import mongoose from "mongoose";
const { Schema, model } = mongoose;

const playerSchema = new Schema(
  {
    recipeId: Number,
    categoryId: Number,
    title: String,
    photo_url: String,
    photosArray: Array,
    time: String,
    description: String,
  },
  { collection: "players" }
);

export default model("Player", playerSchema);

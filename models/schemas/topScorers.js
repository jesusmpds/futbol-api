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
  { collection: "topscorers" }
);

export default model("topScorers", playerSchema);

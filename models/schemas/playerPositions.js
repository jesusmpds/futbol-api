import mongoose from "mongoose";
const { Schema, model } = mongoose;

const playerSchema = new Schema(
  {
    id: Number,
    name: String,
    photo_url: String,
  },
  { collection: "playerPositions" }
);

export default model("playerPositions", playerSchema);

import mongoose from "mongoose";
const { connect } = mongoose;
import variables from "./globals.js";
const { MONGO_URI } = variables;
export default async function getConnection() {
  try {
    connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return "Connection Success";
  } catch (error) {
    console.log(error);
    return "Connection Failed";
  }
}

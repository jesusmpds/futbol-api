if (process.env.NODE_ENV === "development") require("dotenv").config();

export default {
  PORT: process.env.PORT || 8080,
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGO_URI: process.env.MONGO_URI,
};

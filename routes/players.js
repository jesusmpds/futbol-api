import express from "express";
const router = express.Router();
import {
  getAllPlayers,
  getPlayerByID,
  addPlayer,
  getPlayersPositions,
  getTopScorers,
} from "../controllers/playersController.js";

export default () => {
  router
    .get("/positions", getPlayersPositions)
    .get("/topscorers", getTopScorers)
    .get("/", getAllPlayers)
    .get("/id/:id", getPlayerByID)
    .post("/", addPlayer);

  return router;
};

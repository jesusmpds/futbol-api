import {
  getAllPlayersService,
  getPlayerByIDService,
  addPlayerService,
  getPlayersPositionsService,
  getTopScorersService,
} from "../models/players.js";

const getAllPlayers = async (req, res) => {
  try {
    const players = await getAllPlayersService();
    res.json(players);
  } catch (error) {
    console.log(error);
  }
};

const getPlayerByID = async (req, res) => {
  try {
    const players = await getPlayerByIDService(req.params.id);
    res.json(players);
  } catch (error) {
    console.log(error);
  }
};

const addPlayer = async (req, res) => {
  try {
    const players = await addPlayerService(req.body);
    res.json(players);
  } catch (error) {
    console.log(error);
  }
};

const getPlayersPositions = async (req, res) => {
  try {
    const players = await getPlayersPositionsService();
    res.json(players);
  } catch (error) {
    console.log(error);
  }
};

const getTopScorers = async (req, res) => {
  try {
    const players = await getTopScorersService();
    res.json(players);
  } catch (error) {
    console.log(error);
  }
};

export { getAllPlayers, getPlayerByID, addPlayer, getPlayersPositions, getTopScorers };

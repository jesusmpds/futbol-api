import players from "./schemas/players.js";
import playerPositions from "./schemas/playerPositions.js";
import topScorers from "./schemas/topScorers.js";

export const getPlayerByIDService = async id => {
  try {
    const player = await players.findOne({ recipeId: id }).lean();
    return player;
  } catch (error) {
    console.log(error);
  }
};

export const getAllPlayersService = async () => {
  try {
    const player = await players.find().lean();
    return player;
  } catch (error) {
    console.log(error);
  }
};

export const addPlayerService = async newPlayer => {
  try {
    const player = await players.create(newPlayer);
    return player;
  } catch (error) {
    console.log(error);
  }
};

export const getPlayersPositionsService = async () => {
  try {
    const positions = await playerPositions.find();
    return positions;
  } catch (error) {
    console.log(error);
  }
};

export const getTopScorersService = async () => {
  try {
    const top = await topScorers.find();
    return top;
  } catch (error) {
    console.log(error);
  }
};

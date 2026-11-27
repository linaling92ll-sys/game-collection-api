//Hämtar spelmodellen från models/Game.model.js
const Game = require('../models/Game.model');

// Hämta alla spel från databasen
const getAllGames = async (request, h) => {
    try {
        const games = await Game.find();
        return h.response(games).code(200);
    } catch (error) {
        return h.response({ message: 'Kunde inte hämta spelen:'}).code(500);
    }
};

module.exports = {
    getAllGames
};
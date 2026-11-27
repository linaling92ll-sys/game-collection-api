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

// Lägg till ett nytt spel i databasen
const createGame = async(request, h) => {
    try {
        const newGame = new Game(request.payload);
        const savedGame = await newGame.save();

        return h.response(savedGame).code(201);
    } catch (error) {
        return h.response({ message: 'Kunde inte lägga till nytt spel', error: error.message }).code(400);
    }
};

module.exports = {
    getAllGames,
    createGame
};
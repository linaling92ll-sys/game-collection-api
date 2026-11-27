//Hämtar spelmodellen från models/Game.model.js
const Game = require('../models/Game.model');

// Formatera datum och tid enligt svensk tidszon
const formatDate = (date) => {
    return new Intl.DateTimeFormat('sv-SE', {
        timeZone: 'Europe/Stockholm',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
};

// Hämta alla spel från databasen
const getAllGames = async (request, h) => {
    try {
        const games = await Game.find();
        return h.response(games).code(200);
    } catch (error) {
        return h.response({ message: 'Kunde inte hämta spelen:'}).code(500);
    }
};

// Hämta ett specifikt spel med hjälp av ID
const getGameById = async (request, h) => {
    
    try {
        const game = await Game.findById(request.params.id);

        if (!game) {
            return h.response({ message: 'Spelet kunde inte hittas' }).code(404);
        }

        return h.response(game).code(200);
    } catch (error) {
        return h.response({ message: 'Kunde inte hämta spelet', error: error.message }).code(400);
    }
};


// Lägg till ett nytt spel i databasen
const createGame = async(request, h) => {
    try {
        const newGame = new Game(request.payload);
        const savedGame = await newGame.save();

        const response = { ...savedGame.toObject(),
            createdAt: formatDate(savedGame.createdAt),
            updatedAt: formatDate(savedGame.updatedAt)
        };

        return h.response(response).code(201);
    } catch (error) {
        return h.response({ message: 'Kunde inte lägga till nytt spel', error: error.message }).code(400);
    }
};

module.exports = {
    getAllGames,
    getGameById,
    createGame
};
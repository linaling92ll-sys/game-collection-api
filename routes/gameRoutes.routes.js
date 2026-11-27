// API-routes för spel
const gameController = require('../controllers/gameControllers.controller');

// Hämta alla spel
const gameRoutes = [
    {
        method: 'GET',
        path: '/games',
        handler: gameController.getAllGames
    }
];

module.exports = gameRoutes;
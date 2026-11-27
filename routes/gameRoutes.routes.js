// API-routes för spel
const gameController = require('../controllers/gameControllers.controller');
const Joi = require('joi');

// Validerar informationen när ett nytt spel läggs till
const gameValidateSchema = Joi.object({
    title: Joi.string().trim().required().messages({
        'string.empty': 'Speltitel måste anges',
        'any.required': 'Speltitel saknas'
    }),
    genre: Joi.string().trim().required().messages({
        'string.empty': 'Genre måste anges',
        'any.required': 'Genre saknas'
    }),
    rating: Joi.number().integer().min(1).max(10).required().messages({
        'number.base': 'Betyget måste vara ett nummer',
        'number.min': 'Betyget måste vara minst 1',
        'number.max': 'Betyget får vara högst 10',
        'number.integer': 'Betyget måste vara ett heltal',
        'any.required': 'Betyg saknas'
    }),
    completed: Joi.boolean().default(false)
});

// Hämta AQPI:ets olika funktioner
const gameRoutes = [
    // Hämta alla spel
    {
        method: 'GET',
        path: '/games',
        handler: gameController.getAllGames
    },
    // Hämta ett specifikt spel med ID
    {
        method: 'GET',
        path: '/games/{id}',
        handler: gameController.getGameById
    },

    // Lägga till ett nytt spel
    {
        method: 'POST',
        path: '/games',
        options: {
            validate: {
                payload: gameValidateSchema,
                failAction: (request, h, error) => {
                    return h.response({ message: error.details[0].message }).code(400).takeover();
                }
            }
        },
        handler: gameController.createGame
    },

    // Uppdatera ett befintligt spel
    {
        method: 'PUT',
        path: '/games/{id}',
        options: {
            validate: {
                payload: gameValidateSchema,
                failAction: (request, h, error) => {
                    return h.response({ message: error.details[0].message }).code(400).takeover();
                }
            }
        },
        handler: gameController.updateGame
    }
];

module.exports = gameRoutes;
// Beskriver hur ett spel ska sparas i MongoDB
const { required } = require('joi');
const mongoose = require('mongoose');

// Skapar ett schema för spel
const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Speltitel måste anges']
    },
    genre: {
        type: String,
        required: [true, 'Genre måste anges']
    },
    rating: {
        type: Number,
        required: [true, 'Betyg måste anges'],
        min: [1, 'Betyget måste vara minst 1'],
        max: [10, 'Betyget får högst vara 10']
    },
    completed: {
        type: Boolean,
        default: false
    }
},
 {timestamps: true });

// Skapar modellen och exporterar den
const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
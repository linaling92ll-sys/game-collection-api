// Anslutning till MongoDb
const mongoose = require('mongoose');
require('dotenv').config();

//Ansluter till MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Ansluten till MongoDB!');
    } catch (error) {
        console.error('Kunde inte ansluta till databasen:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
const connectDB = require('./database');
const Hapi = require('@hapi/hapi');

const server = Hapi.server({
    port:3000,
    host: 'localhost'
});

// Startar Hapi-server
const init = async() => {
    await connectDB();
    // enkell test-route för att kontrollera att servern fungerar
    server.route({
        method: 'GET',
        path: '/',
        handler: () => {
            return { message: 'Game Collection API fungerar'} ;
        }
    });

    await server.start();
    console.log('Serverkörs på:', server.info.uri);
};
init();
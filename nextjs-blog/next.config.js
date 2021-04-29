module.exports = {
    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: 'secret',
        secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        staticFolder: '/public',
        apiKey: process.env.FOODSAFETYKOREA_API_KEY,
        serviceId: process.env.FOODSAFETYKOREA_API_SERVICE_ID,
    }
}
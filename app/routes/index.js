const express = require('express');
const router = express.Router();

// Import artist and album routes from their respective modules
const artistRoutes = require('./artistRoutes');
const albumRoutes = require('./albumRoutes');

// Define route handlers for the "/artists" and "/albums" routes
router.use('/artists', artistRoutes); // Delegate requests for /artists to the artistRoutes router
router.use('/albums', albumRoutes); // Delegate requests for /albums to the albumRoutes router

module.exports = router; // Export the router to be used in the main Express application

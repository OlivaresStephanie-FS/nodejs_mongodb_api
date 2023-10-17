const express = require("express");
const router = express.Router();

// Import artist-related controller functions from the "artistController" module
const {
    getArtist,
    getArtistById,
    createArtist,
    deleteArtist,
    updateArtist,
} = require('../controllers/artistController');

// Define routes and associate them with the corresponding controller functions
router.get("/", getArtist); // Handle GET request to retrieve a list of artists

router.get("/:id", getArtistById); // Handle GET request to retrieve a single artist by ID

router.post("/", createArtist); // Handle POST request to create a new artist

router.put("/:id", updateArtist); // Handle PUT request to update an artist by ID

router.delete("/:id", deleteArtist); // Handle DELETE request to delete an artist by ID

module.exports = router; // Export the router to be used in the main Express application

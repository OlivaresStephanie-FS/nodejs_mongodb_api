const Artist = require("../models/Artist");

// Function to retrieve all artists
exports.getArtist = async (req, res) => {
    try {
        // Use the "find" method to retrieve all artists from the database
        const artists = await Artist.find();
        
        // Send a success response with the artist data and a status message
        res.status(200).json({
            data: artists, // Data is an array of artists
            status: "success", // Status is "success"
            message: `${req.method} - Artist request made.` // Message indicating the HTTP method used
        }); 
    } catch (message) {
        // If there's an error, send a failure response with an error message
        res.status(400).json({
            success: "fail", // Status is "fail"
            message, // The error message
        });
    }
};

// Function to retrieve a single artist by their ID
exports.getArtistById = async (req, res) => {
    try {
        // Extract the "id" parameter from the request URL
        const { id } = req.params;
        
        // Use "findById" method to find an artist by their ID
        const artist = await Artist.findById(id);
        
        // Send a success response with the artist data and a status message
        res.status(200).json({
            data: artist, // Data is the single artist found
            status: "success", // Status is "success"
            message: `${req.method} - Artist request made.` // Message indicating the HTTP method used
        });
    } catch ({ message }) {
        // If there's an error, send a failure response with an error message
        res.status(400).json({
            success: "fail", // Status is "fail"
            message, // The error message
        });
    }
};

// Function to create a new artist
exports.createArtist = async (req, res) => {
    try {
        // Extract the "artist" data from the request body
        const { artist } = req.body;
        
        // Use the "create" method to create a new artist in the database
        const newArtist = await Artist.create(artist);
        
        // Send a success response with the newly created artist data and a status message
        res.status(200).json({
            data: newArtist, // Data is the newly created artist
            status: "success", // Status is "success"
            message: `${req.method} - Artist request made.` // Message indicating the HTTP method used
        });
    } catch ({ message }) {
        // If there's an error, send a failure response with an error message
        res.status(400).json({
            success: "fail", // Status is "fail"
            message, // The error message
        });
    }
};

// Function to update an artist by their ID
exports.updateArtist = async (req, res) => {
    try {
        // Extract the "id" parameter from the request URL
        const { id } = req.params;
        
        // Use the "findByIdAndUpdate" method to update an artist by their ID
        // It uses the request body for the update data and sets options like "new" and "runValidators"
        const artist = await Artist.findByIdAndUpdate(id, req.body, {
            new: true, // Return the updated document
            runValidators: true, // Run model validation
        });
        
        // Send a success response with the updated artist data and a status message
        res.status(200).json({
            data: artist, // Data is the updated artist
            status: "success", // Status is "success"
            message: `${req.method} - Artist request made.` // Message indicating the HTTP method used
        });
    } catch ({ message }) {
        // If there's an error, send a failure response with an error message
        res.status(400).json({
            success: "fail", // Status is "fail"
            message, // The error message
        });
    }
};

// Function to delete an artist by their ID
exports.deleteArtist = async (req, res) => {
    try {
        // Extract the "id" parameter from the request URL
        const { id } = req.params;
        
        // Use the "findByIdAndDelete" method to delete an artist by their ID
        await Artist.findByIdAndDelete(id);
        
        // Send a success response with the deleted artist's ID and a status message
        res.status(200).json({
            id, // ID of the deleted artist
            status: "success", // Status is "success"
            message: `${req.method} - Artist request made.` // Message indicating the HTTP method used
        });
    } catch (message) {
        // If there's an error, send a failure response with an error message
        res.status(400).json({
            success: "fail", // Status is "fail"
            message, // The error message
        });
    }
};

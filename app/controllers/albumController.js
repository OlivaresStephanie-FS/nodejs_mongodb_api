const Album = require("../models/Album");

// Function to retrieve all albums
exports.getAlbum = async (req, res) => {
    try {
        // Use the "find" method to retrieve all albums from the database
        const album = await Album.find();
        
        // Send a success response with the album data and a status message
        res.status(200).json({
            data: album, // Data is the array of albums
            status: "success", // Status is "success"
            message: `${req.method} - Album request made.` // Message indicating the HTTP method used
        }); 
    } catch (message) {
        // If there's an error, send a failure response with an error message
        res.status(400).json({
            success: "fail", // Status is "fail"
            message, // The error message
        });
    }
};

// Function to retrieve a single album by its ID
exports.getAlbumById = async (req, res) => {
    try {
        // Extract the "id" parameter from the request URL
        const { id } = req.params;
        
        // Use "findById" method to find an album by its ID
        const album = await Album.findById(id);
        
        // Send a success response with the album data and a status message
        res.status(200).json({
            data: album, // Data is the single album found
            status: "success", // Status is "success"
            message: `${req.method} - Album request made.` // Message indicating the HTTP method used
        });
    } catch ({ message }) {
        // If there's an error, send a failure response with an error message
        res.status(400).json({
            success: "fail", // Status is "fail"
            message, // The error message
        });
    }
};

// Function to create a new album
exports.createAlbum = async (req, res) => {
    try {
        // Extract the "album" data from the request body
        const { album } = req.body;
        
        // Use the "create" method to create a new album in the database
        const newAlbum = await Album.create(album);
        
        // Send a success response with the newly created album data and a status message
        res.status(200).json({
            data: newAlbum, // Data is the newly created album
            status: "success", // Status is "success"
            message: `${req.method} - Album request made.` // Message indicating the HTTP method used
        });
    } catch ({ message }) {
        // If there's an error, send a failure response with an error message
        res.status(400).json({
            success: "fail", // Status is "fail"
            message, // The error message
        });
    }
};

// Function to update an album by its ID
exports.updateAlbum = async (req, res) => {
    try {
        // Extract the "id" parameter from the request URL
        const { id } = req.params;
        
        // Use the "findByIdAndUpdate" method to update an album by its ID
        // It uses the request body for the update data and sets options like "new" and "runValidators"
        const album = await Album.findByIdAndUpdate(id, req.body, {
            new: true, // Return the updated document
            runValidators: true, // Run model validation
        });
        
        // Send a success response with the updated album data and a status message
        res.status(200).json({
            data: album, // Data is the updated album
            status: "success", // Status is "success"
            message: `${req.method} - Album request made.` // Message indicating the HTTP method used
        });
    } catch ({ message }) {
        // If there's an error, send a failure response with an error message
        res.status(400).json({
            success: "fail", // Status is "fail"
            message, // The error message
        });
    }
};

// Function to delete an album by its ID
exports.deleteAlbum = async (req, res) => {
    try {
        // Extract the "id" parameter from the request URL
        const { id } = req.params;
        
        // Use the "findByIdAndDelete" method to delete an album by its ID
        await Album.findByIdAndDelete(id);
        
        // Send a success response with the deleted album's ID and a status message
        res.status(200).json({
            id, // ID of the deleted album
            status: "success", // Status is "success"
            message: `${req.method} - Album request made.` // Message indicating the HTTP method used
        });
    } catch (message) {
        // If there's an error, send a failure response with an error message
        res.status(400).json({
            success: "fail", // Status is "fail"
            message, // The error message
        });
    }
};

// albumRoutes.js

import express from "express";

const router = express.Router();

// Import album-related controller functions from the "albumController" module using ESM syntax
import {
	getAlbums,
	getAlbumById,
	createAlbum,
	deleteAlbum,
	updateAlbum,
} from "../controllers/albumController.mjs";

// Define routes and associate them with the corresponding controller functions
router.get("/", getAlbums); // Handle GET request to retrieve a list of albums

router.get("/:id", getAlbumById); // Handle GET request to retrieve a single album by ID

router.post("/", createAlbum); // Handle POST request to create a new album

router.put("/:id", updateAlbum); // Handle PUT request to update an album by ID

router.delete("/:id", deleteAlbum); // Handle DELETE request to delete an album by ID

export default router; // Export the router to be used in the main Express application

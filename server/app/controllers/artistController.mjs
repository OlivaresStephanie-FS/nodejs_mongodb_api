// Import asyncHandler middleware
import asyncHandler from "../middlewares/asyncHandler.mjs";

// Import the Artist model
import Artist from "../models/Artist.mjs";


// Function to retrieve all artists
export const getArtist = asyncHandler(async (req, res) => {

    let query;
	const reqQuery = { ...req.query };
	const removeFields = ["select"];

	removeFields.forEach((params) => {
		delete reqQuery[params];
	});


	let queryString = JSON.stringify(reqQuery);
	queryString = queryString.replace(/\b(gte|gt|lt|lte|in)\b/, (match) => {
		return `$${match}`;
	});
	console.log(queryString);
	// Use the "find" method to retrieve all artists from the database
	query = Artist.find(JSON.parse(queryString));
	if (req.query.select) {
        const fields = req.query.select.split(',').join(' ');
        query.select(fields);
        console.log(fields);
	};
	const artists = await query;



	// Send a success response with the artist data and a status message
	res.status(200).json({
		data: artists, // Data is an array of artists
		status: "success", // Status is "success"
		message: `${req.method} - Artist request made.`, // Message indicating the HTTP method used
	});
});

// Function to retrieve a single artist by their ID
export const getArtistById = asyncHandler(async (req, res) => {
	// Extract the "id" parameter from the request URL
	const { id } = req.params;

	// Use "findById" method to find an artist by their ID
	const artist = await Artist.findById(id);

	// Send a success response with the artist data and a status message
	res.status(200).json({
		data: artist, // Data is the single artist found
		status: "success", // Status is "success"
		message: `${req.method} - Artist request made.`, // Message indicating the HTTP method used
	});
});

// Function to create a new artist
export const createArtist = asyncHandler(async (req, res) => {
	console.log(req.body);
	// Extract the "artist" data from the request body
	const { artist } = req.body;

	// Use the "create" method to create a new artist in the database
	const newArtist = await Artist.create(artist);

	// Send a success response with the newly created artist data and a status message
	res.status(200).json({
		data: newArtist, // Data is the newly created artist
		status: "success", // Status is "success"
		message: `${req.method} - Artist request made.`, // Message indicating the HTTP method used
	});
});

// Function to update an artist by their ID
export const updateArtist = asyncHandler(async (req, res) => {
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
		message: `${req.method} - Artist request made.`, // Message indicating the HTTP method used
	});
});

// Function to delete an artist by their ID
export const deleteArtist = asyncHandler(async (req, res) => {
	// Extract the "id" parameter from the request URL
	const { id } = req.params;

	// Use the "findByIdAndDelete" method to delete an artist by their ID
	await Artist.findByIdAndDelete(id);

	// Send a success response with the deleted artist's ID and a status message
	res.status(200).json({
		id, // ID of the deleted artist
		status: "success", // Status is "success"
		message: `${req.method} - Artist request made.`, // Message indicating the HTTP method used
	});
});

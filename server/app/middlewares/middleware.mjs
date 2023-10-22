// middlewares/middleware.js

// Import the morgan and express packages for logging and middleware functionality
import morgan from "morgan";
import express from "express";

// Create a logger middleware using morgan with "dev" format
const loggerMiddleware = morgan("dev");

// Define a CORS (Cross-Origin Resource Sharing) middleware to set necessary headers
const corsMiddleware = (req, res, next) => {
	// Set the "Access-Control-Allow-Origin" header to allow requests from any origin
	res.header("Access-Control-Allow-Origin", "*");
	// Set allowed request headers
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);

	// If the request method is "OPTIONS," set allowed methods
	if (req.method === "OPTIONS") {
		res.header(
			"Access-Control-Allow-Methods",
			"GET, POST, PUT, PATCH, DELETE"
		);
	}

	// Call the next middleware or route handler
	next();
};

// Create a JSON middleware to parse JSON-encoded request bodies
const jsonMiddleware = express.json();

// Create a URL-encoded middleware to parse URL-encoded request bodies with extended option set to true
const urlEncodedMiddleware = express.urlencoded({
	extended: true,
});

// Export the defined middlewares for use in your application
export {
	loggerMiddleware,
	corsMiddleware,
	jsonMiddleware,
	urlEncodedMiddleware,
};

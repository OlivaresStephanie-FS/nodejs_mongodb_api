// app.js

import express from "express";
import routeHandler from "./routes/index.js";
import {
	loggerMiddleware,
	corsMiddleware,
	jsonMiddleware,
	urlEncodedMiddleware,
} from "./middlewares/middleware.mjs"; // Import the middleware functions
import catchAllHandler from "./middlewares/catchAllHandler.mjs";
import errorHandler from "./middlewares/errorHandler.mjs";
import asyncHandler from "./middlewares/asyncHandler.mjs";

const app = express();

// Middleware for logging using Morgan
app.use(loggerMiddleware);

// Middleware to handle the CORS (Cross-Origin Resource Sharing) policy
app.use(corsMiddleware);

// Middleware that parses incoming JSON data
app.use(jsonMiddleware);

// Parsing middleware for form data
app.use(urlEncodedMiddleware);

// Define a route for the root URL ("/") to indicate that the API is working
app.get("/", (req, res) => {
	res.status(200).json({
		message: "Api is Working!",
	});
});

// Mount the route handler to handle API routes starting with "/api/v1"
app.use("/api/v1", routeHandler);

// Catch-all route for handling undefined routes
app.use(catchAllHandler);

// Error handling middleware
app.use(errorHandler);

export default app;

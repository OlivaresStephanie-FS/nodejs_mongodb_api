const express = require("express");
const app = express();
const morgan = require("morgan");
const routeHandler = require("./routes"); // Import the route handler module

// Middleware for logging using Morgan
app.use(morgan("dev"));

// Middleware to handle the CORS (Cross-Origin Resource Sharing) policy
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); // Define HTTP methods allowed by CORS
  }

  next(); // Continue to the next middleware or route handler
});

// Middleware that parses incoming JSON data
app.use(express.json());

// Parsing middleware for form data
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Define a route for the root URL ("/") to indicate that the API is working
app.get('/', (req, res) => {
  res.status(200).json({
    message: "Api is Working!"
  });
});

// Mount the route handler to handle API routes starting with "/api/v1"
app.use('/api/v1', routeHandler); // Delegates route handling to the "routeHandler" module

module.exports = app; // Export the Express application to be run in your server

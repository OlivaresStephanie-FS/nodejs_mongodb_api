// Load environment variables from a .env file
require('dotenv').config();

// Import the function to connect to the database
const connectDB = require("./app/db/config");

// Import the Express application
const app = require("./app/app");

// Define the port for the server
const port = process.env.port || 3000;

// Connect to the database
connectDB();

// Start the Express server, and listen on the specified port
app.listen(port, () =>
  console.log(`Server running on port: ${port}!`)
);

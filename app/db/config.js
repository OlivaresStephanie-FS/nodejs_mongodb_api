const mongoose = require("mongoose");

// Define a function to connect to a MongoDB database
const connectDB = async () => {
	try {
		// Use the `mongoose.connect` method to establish a connection to the MongoDB server
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true, // Use the new Server Discovery and Monitoring engine
			useNewUrlParser: true, // Use the new URL parser
		});

		// Log a message indicating a successful database connection
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		// If an error occurs during the connection attempt:
		console.log(error.message); // Log the error message to the console
		process.exit(1); // Terminate the Node.js process with an exit code of 1 (indicating an error)
	}
};

// Export the `connectDB` function so it can be used in other parts of the application
module.exports = connectDB;

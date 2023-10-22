// app/db/config.js

import mongoose from "mongoose";

// Define a function to connect to a MongoDB database
const connectDB = async () => {
	try {
		// Use the `mongoose.connect` method to establish a connection to the MongoDB server
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});

		// Log a message indicating a successful database connection
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
};

export { connectDB };

import mongoose from "mongoose";

// Define a Mongoose schema for the 'Artist' model
const artistSchema = new mongoose.Schema({
	// _id: mongoose.Schema.Types.ObjectId, // Make sure _id is set as a unique identifier
	name: {
		type: String, // Define the data type for the 'name' field as a string
		required: [true, "Please add the artist's name"], // Require a non-empty value for 'name' with a custom error message
		trim: true, // Trim leading and trailing white spaces
		maxlength: [100, "Name cannot be more than 100 characters"], // Set a maximum length for 'name' with a custom error message
	},
	genre: {
		type: String, // Define the data type for the 'genre' field as a string
		required: [true, "Please add the artist's primary genre"], // Require a non-empty value for 'genre' with a custom error message
		trim: true, // Trim leading and trailing white spaces
		maxlength: [50, "Genre cannot be more than 50 characters"], // Set a maximum length for 'genre' with a custom error message
	},
	formed_year: {
		type: Number, // Define the data type for the 'formed_year' field as a number
		required: [true, "Please add the year the artist was formed"], // Require a non-empty value for 'formed_year' with a custom error message
	},
	description: {
		type: String, // Define the data type for the 'description' field as a string
		required: [true, "Please add a description of the artist"], // Require a non-empty value for 'description' with a custom error message
		trim: true, // Trim leading and trailing white spaces
		maxlength: [500, "Description cannot be more than 500 characters"], // Set a maximum length for 'description' with a custom error message
	},
	albums: [
		{
			type: mongoose.Schema.Types.ObjectId, // Define the data type as a reference to another Mongoose model
			ref: "Album", // Reference the 'Album' model to establish a relationship
		},
	],
	total_albums: {
		type: Number, // Define the data type for the 'total_albums' field as a number
	},
	website: {
		type: String, // Define the data type for the 'website' field as a string
		match: [
			/^(https?:\/\/)?([\w-]+(\.[\w-]+)+([\w-.,@?^=%&:/~+#]*[\w-@?^=%&/~+#])?)$/, // Define a regular expression pattern for a valid website URL
			"Please enter a valid website URL", // Provide a custom error message for invalid URLs
		],
	},
});

// Create and export a Mongoose model named 'Artist' using the defined schema
const Artist = mongoose.model("Artist", artistSchema);

export default Artist;

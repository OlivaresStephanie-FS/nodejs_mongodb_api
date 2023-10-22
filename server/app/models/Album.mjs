import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add the album title"], // Require a non-empty value for "title" with a custom error message
        trim: true, // Trim leading and trailing white spaces
        maxlength: [100, "Title cannot be more than 100 characters"], // Set a maximum length for "title" with a custom error message
    },
    artist: {
			type: mongoose.Schema.Types.ObjectId, // Define the data type as a reference to another Mongoose model
			ref: "Artist", // Reference the "Album" model to establish a relationship
		},
    genre: {
        type: String,
        required: [true, "Please add the album genre"], // Require a non-empty value for "genre" with a custom error message
        trim: true, // Trim leading and trailing white spaces
        maxlength: [50, "Genre cannot be more than 50 characters"], // Set a maximum length for "genre" with a custom error message
    },
    release_year: {
        type: Number,
        required: [true, "Please add the release year"], // Require a non-empty value for "release_year" with a custom error message
    },
    tracklist: [
        {
            // Define an array of objects for the "tracklist" field
            track_number: {
                type: Number,
                required: [true, "Please add the track number"], // Require a non-empty value with a custom error message
            },
            title: {
                type: String,
                required: [true, "Please add the track title"], // Require a non-empty value with a custom error message
                trim: true, // Trim leading and trailing white spaces
                maxlength: [100, "Title cannot be more than 100 characters"], // Set a maximum length for "title" with a custom error message
            },
            duration: {
                type: String,
                required: [true, "Please add the track duration"], // Require a non-empty value with a custom error message
            },
        },
    ],
    total_duration: {
        type: String,
        required: [true, "Please add the total duration of the album"], // Require a non-empty value with a custom error message
    },
    record_label: {
        type: String,
        required: [true, "Please add the record label"], // Require a non-empty value with a custom error message
        trim: true, // Trim leading and trailing white spaces
        maxlength: [100, "Record label name cannot be more than 100 characters"], // Set a maximum length with a custom error message
    },
    producer: {
        type: String,
        required: [true, "Please add the producer name"], // Require a non-empty value with a custom error message
        trim: true, // Trim leading and trailing white spaces
        maxlength: [100, "Producer name cannot be more than 100 characters"], // Set a maximum length with a custom error message
    },
    album_artwork: {
        type: String,
        required: [true, "Please add the URL or file path to the album artwork"], // Require a non-empty value with a custom error message
    },
});

const Album = mongoose.model("Album", albumSchema);

export default Album;

const mongoose = require("mongoose");

// Define a Mongoose schema for the "Album" model
const albumSchema = new mongoose.Schema({
    title: {
        type: "String", // Define the data type for the "title" field as a string
        required: [true, "Please add the album title"], // Require a non-empty value for "title" with a custom error message
        trim: true, // Trim leading and trailing white spaces
        maxlength: [100, "Title cannot be more than 100 characters"], // Set a maximum length for "title" with a custom error message
    },
    artist: {
        type: "String", // Define the data type for the "artist" field as a string
        required: [true, "Please add the artist or band name"], // Require a non-empty value for "artist" with a custom error message
        trim: true, // Trim leading and trailing white spaces
        maxlength: [100, "Artist name cannot be more than 100 characters"], // Set a maximum length for "artist" with a custom error message
    },
    genre: {
        type: "String", // Define the data type for the "genre" field as a string
        required: [true, "Please add the album genre"], // Require a non-empty value for "genre" with a custom error message
        trim: true, // Trim leading and trailing white spaces
        maxlength: [50, "Genre cannot be more than 50 characters"], // Set a maximum length for "genre" with a custom error message
    },
    release_year: {
        type: "Number", // Define the data type for the "release_year" field as a number
        required: [true, "Please add the release year"], // Require a non-empty value for "release_year" with a custom error message
    },
    tracklist: [
        {
            // Define an array of objects for the "tracklist" field
            track_number: {
                type: "Number", // Define the data type for "track_number" as a number
                required: [true, "Please add the track number"], // Require a non-empty value with a custom error message
            },
            title: {
                type: "String", // Define the data type for "title" as a string
                required: [true, "Please add the track title"], // Require a non-empty value with a custom error message
                trim: true, // Trim leading and trailing white spaces
                maxlength: [100, "Title cannot be more than 100 characters"], // Set a maximum length for "title" with a custom error message
            },
            duration: {
                type: "String", // Define the data type for "duration" as a string
                required: [true, "Please add the track duration"], // Require a non-empty value with a custom error message
            },
        },
    ],
    total_duration: {
        type: "String", // Define the data type for the "total_duration" field as a string
        required: [true, "Please add the total duration of the album"], // Require a non-empty value with a custom error message
    },
    record_label: {
        type: "String", // Define the data type for the "record_label" field as a string
        required: [true, "Please add the record label"], // Require a non-empty value with a custom error message
        trim: true, // Trim leading and trailing white spaces
        maxlength: [100, "Record label name cannot be more than 100 characters"], // Set a maximum length with a custom error message
    },
    producer: {
        type: "String", // Define the data type for the "producer" field as a string
        required: [true, "Please add the producer name"], // Require a non-empty value with a custom error message
        trim: true, // Trim leading and trailing white spaces
        maxlength: [100, "Producer name cannot be more than 100 characters"], // Set a maximum length with a custom error message
    },
    album_artwork: {
        type: "String", // Define the data type for the "album_artwork" field as a string
        required: [true, "Please add the URL or file path to the album artwork"], // Require a non-empty value with a custom error message
    },
});

// Create and export a Mongoose model named "Album" using the defined schema
module.exports = mongoose.model("Album", albumSchema);

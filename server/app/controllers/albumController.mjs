// Import asyncHandler middleware to handle asynchronous operations
import asyncHandler from "../middlewares/asyncHandler.mjs";

// Import the Album and Artist models
import Album from "../models/Album.mjs";
import Artist from "../models/Artist.mjs";

// Function to retrieve all albums
export const getAlbums = asyncHandler(async (req, res) => {
  let query;
  // Create a copy of the request query parameters
  const reqQuery = { ...req.query };
  // Define an array of fields to remove from the query
  const removeFields = ["select"];

  // Loop through the fields to remove from the query
  removeFields.forEach((param) => {
    // Remove the specified field from the request query
    delete reqQuery[param];
  });

  // Convert the modified query into a JSON string
  let queryString = JSON.stringify(reqQuery);
  // Replace certain keywords (e.g., gte, gt, lt, lte, in) with corresponding MongoDB operators
  queryString = queryString.replace(/\b(gte|gt|lt|lte|in)\b/g, (match) => {
    return `$${match}`;
  });

  // Use the "find" method to retrieve albums from the database based on the query
  query = Album.find(JSON.parse(queryString));
  if (req.query.select) {
    // If a "select" field is specified in the query, select only those fields
    const fields = req.query.select.split(",").join(" ");
    query.select(fields);
  }
  // Execute the query and store the result in the "albums" variable
  const albums = await query;

  // Send a success response with the album data and a status message
  res.status(200).json({
    data: albums, // Data is an array of albums
    success: true, // Status is "success"
    message: `${req.method} - Album request made.`, // Message indicating the HTTP method used
  });
});

// Function to retrieve a single album by its ID
export const getAlbumById = asyncHandler(async (req, res) => {
  // Extract the "id" parameter from the request URL
  const { id } = req.params;

  // Use the "findById" method to find an album by its ID
  const album = await Album.findById(id);

  // Send a success response with the album data and a status message
  res.status(200).json({
    data: album, // Data is the single album found
    status: "success", // Status is "success"
    message: `${req.method} - Album request made.`, // Message indicating the HTTP method used
  });
});

// Function to create a new album
export const createAlbum = asyncHandler(async (req, res) => {
  // Extract the "artist" data from the request body
  const { artist } = req.body;

  // Use the "create" method to create a new album in the database
  const user = await Artist.findById(artist);

  // Create the album data object by passing the request body directly
  const albumData = new Album(req.body);

  // Set the artist property on the albumData object
  albumData.artist = user;

  // Perform validation checks and save the album
  const validationErrors = albumData.validateSync();

  if (validationErrors) {
    // If there are validation errors, return a 400 status with the error message
    return res.status(400).json({ success: false, error: validationErrors.message });
  }

  // Save the album and the associated user
  const queries = [albumData.save(), user.save()];

  await Promise.all(queries);

  // Send a success response with the newly created album data
  res.status(200).json({
    data: albumData,
    status: "success",
    message: `${req.method} - Album request made.`,
  });
});

// Function to update an album by its ID
export const updateAlbum = asyncHandler(async (req, res) => {
  // Extract the "id" parameter from the request URL
  const { id } = req.params;

  // Retrieve the "artist" data from the request body
  const { artist, ...updateData } = req.body;

  // Use the "findByIdAndUpdate" method to update an album by its ID
  // It uses the request body for the update data and sets options like "new" and "runValidators"
  const album = await Album.findByIdAndUpdate(id, updateData, {
    new: true, // Return the updated document
    runValidators: true, // Run model validation
  });

  // Ensure the album has a valid _id field
  album._id = id;  // Assign the id from the request to the _id field

  // Update the "artist" property on the updated album
  album.artist = artist;

  // Save the updated album
  await album.save();

  // Send a success response with the updated album data and a status message
  res.status(200).json({
    data: album, // Data is the updated album
    status: "success", // Status is "success"
    message: `${req.method} - Album request made.`, // Message indicating the HTTP method used
  });
});


// Function to delete an album by its ID
export const deleteAlbum = asyncHandler(async (req, res) => {
  // Extract the "id" parameter from the request URL
  const { id } = req.params;

  // Use the "findByIdAndDelete" method to delete an album by its ID
  await Album.findByIdAndDelete(id);

  // Send a success response with the deleted album's ID and a status message
  res.status(200).json({
    id, // ID of the deleted album
    status: "success", // Status is "success"
    message: `${req.method} - Album request made.`, // Message indicating the HTTP method used
  });
});

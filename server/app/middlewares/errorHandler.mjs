// middlewares/errorHandler.mjs
import mongoose from 'mongoose';
import ErrorResponse from '../utils/ErrorResponse.js';

const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error
    console.log('Errors Caught:');
    // console.log(err);

    let error = { ...err };

    // Check for MongoDB duplicate key (unique constraint) error
    if (err.name === "MongoServerError") {
        if (err.code === 11000) {
            const message = `Duplicate key error. Please check the input data.`;
            error = new ErrorResponse(message, 400); // 400 Bad Request
            console.log(message);
        }
    } else if (err.name === "CastError") {
        const message = `Resource not found with the id of ${err.value}`;
        error = new ErrorResponse(message, 404); // 404 Not Found
        console.log(message);

    } else if (err.name === "ValidationError") {
        // Handle Mongoose validation errors
        const message = Object.values(err.errors).map((val) =>  val.message);
        console.log(message);
        error = new ErrorResponse(message, 404);
    }

    // Handle different types of errors here and send an appropriate response
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error",
    });
};

export default errorHandler;

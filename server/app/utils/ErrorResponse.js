// Define a class called ErrorResponse that extends the built-in Error class
class ErrorResponse extends Error {
    // Constructor for the ErrorResponse class that takes a message and statusCode
    constructor(message, statusCode) {
        // Call the constructor of the parent class (Error) with the provided message
        super(message);

        // Set the statusCode property to the provided statusCode
        this.statusCode = statusCode;
    }
}

// Export the ErrorResponse class to make it available for use in other parts of your code
export default ErrorResponse;

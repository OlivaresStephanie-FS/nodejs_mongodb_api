# NodeJS MongoDB API

## Application Structure

The application consists of two main files:

- **app.js**: This is the entry point of the Express application. It sets up the middleware, defines API routes, and exports the Express application instance.

### Middleware

- **Morgan**: Used for request logging in the console.
- **CORS Policy**: Sets up middleware to handle Cross-Origin Resource Sharing (CORS) headers, allowing cross-origin requests from any origin. It also specifies the allowed HTTP methods and headers.
- **JSON Parsing**: Middleware for parsing incoming requests as JSON.
- **URL Encoded Parsing**: Middleware for parsing URL-encoded data.

### Routes

- A simple root route that responds with a "Api is Working!" message when you access the root URL.
- The main API routes are mounted using the `routeHandler` from the `app/index.js` file under the path `/api/v1`.

- **app/index.js**: This file defines the sub-routes for the artists and albums, which are organized using Express Router.

## API Endpoints

The application provides the following API endpoints:

### Artists

- `GET /api/v1/artists`: Get a list of all artists.
- `GET /api/v1/artists/:artistId`: Get details of a specific artist by ID.
- `POST /api/v1/artists`: Create a new artist.
- `PUT /api/v1/artists/:artistId`: Update an existing artist by ID.
- `DELETE /api/v1/artists/:artistId`: Delete an artist by ID.

### Albums

- `GET /api/v1/albums`: Get a list of all albums.
- `GET /api/v1/albums/:albumId`: Get details of a specific album by ID.
- `POST /api/v1/albums`: Create a new album.
- `PUT /api/v1/albums/:albumId`: Update an existing album by ID.
- `DELETE /api/v1/albums/:albumId`: Delete an album by ID.

## Technologies Used

- Node.js
- Express.js
- MongoDB (database)

## Contributing

If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

This application is a basic template to help you get started with building RESTful APIs using Express and MongoDB. It's meant as a starting point for your own projects. You can expand and customize it to suit your specific needs.

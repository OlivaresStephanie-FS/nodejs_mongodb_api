// app/routes/index.js

import express from "express";

// Import artist and album routes from their respective modules using ESM syntax
import artistRoutes from "./artistRoutes.js";
import albumRoutes from "./albumRoutes.js";

const router = express.Router();

// Define route handlers for the "/artists" and "/albums" routes
router.use("/artists", artistRoutes); // Delegate requests for /artists to the artistRoutes router
router.use("/albums", albumRoutes); // Delegate requests for /albums to the albumRoutes router

export default router; // Export the router to be used in the main Express application

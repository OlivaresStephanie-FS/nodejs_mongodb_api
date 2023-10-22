// server.js

import "dotenv/config.js";
import { connectDB } from "./app/db/config.mjs";
import app from "./app/app.js";

const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => {
	console.log(`Server running on port: ${port}!`);
});

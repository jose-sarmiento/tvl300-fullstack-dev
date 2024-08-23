import "dotenv/config";

import express from "express";
import { loadRoutes } from "./routes/index.js";

const app = express();

/**
 * Load all routes
 * @param app Express instance
 */
loadRoutes(app);

const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

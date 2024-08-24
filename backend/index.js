import "dotenv/config";

import express from "express";
import cors from "cors";
import { loadRoutes } from "./routes/index.js";

const app = express();

// enable cors
app.use(cors());

/**
 * Load all routes
 * @param app Express instance
 */
loadRoutes(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

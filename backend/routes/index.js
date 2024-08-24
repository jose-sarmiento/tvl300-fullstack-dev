import whoiserver from "./whoisserver.js";

export function loadRoutes(app) {
    /**
     * Initialize each feature router here
     */
    app.use("/api/whoisserver", whoiserver);
}

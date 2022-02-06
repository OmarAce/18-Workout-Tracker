// Depedency
const path = require("path");

// Exporting App HTML routes
module.exports = (app) => {

    // Homepage
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Exercise/Workout Tracker
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    
    // Stats Page
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};
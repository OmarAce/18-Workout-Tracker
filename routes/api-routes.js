// Depedency
const Workout = require("../models/workout.js")

// Exporting App Data Routes Module
module.exports = function (app) {
    // Finds Workouts
    app.get("/api/workouts", function (req, res) {
        Workout.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    });
    // Gets Workout Range for Data Tables
    app.get("/api/workouts/range", ({}, res) => {
        Workout.find({})
            .then((data) => {
                res.json(data);
            })
            .catch(err => {
                console.log("err", err)
                res.json(err)
             });
    });
    // Posts to Workout DB
    app.post("/api/workouts", function (req, res) {
        Workout.create({})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });
    // Edits Workouts by ID
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true, runValidators: true }
        )
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });
}
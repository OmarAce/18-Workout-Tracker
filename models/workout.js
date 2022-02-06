// Mongoose Dependency
const mongoose = require("mongoose");
// Mongoose Data Schema
const Schema = mongoose.Schema;

// Schema Model
const WorkoutSchema = new Schema({
 
    // Date Saved/ Time stamp
    day: {
        type: Date,
        default: Date.now,
    },

    // Exercise Model
    exercises: [
        {
            // Saves Exercise Type
            type: {
                type: String,
                required: true
            },

            // Exercise Name
            name: {
                type: String,
                required: true
            },

            // Exercise Duration
            duration: {
                type: Number,
                required: true
            },

            // Distance Traveled
            distance: {
                type: Number
            },

            // Weight Used during Workout
            weight: {
                type: Number
            },

            // Number of Repetitions 
            reps: {
                type: Number
            },
            
            // Number Sets Performed
            sets: {
                type: Number
            }

        },
    ]

// virtuals for adding total duration of workout
// reduce method flattens the durations into one single value

},{ toJSON: { virtuals: true }} );

WorkoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise)=>{
        return total + exercise.duration
    },0);
})

// Workout Model Definition
const Workout = mongoose.model("Workout", WorkoutSchema);

// Exporting Workout Model as module
module.exports = Workout;
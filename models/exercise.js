const mongoose = require('mongoose');

// Initialize exercise Schema
const Schema = mongoose.Schema

const ExerciseSchema = new Schema({
    Day: {
        type: Date, 
        default: Date.now()
    },
    Workouts: [{
        Type: {
            type: String,
            trim: true,
            required: true,
        },
        Name: {
            type: String,
            trim: true,
            required: true,
        },
        Duration: {
            type: Number,
            required: true,
        },
        Weight: {
            type: Number,
            required: true,
        },
        Reps: Number,
        Sets: Number,
    }]
})

const exercise = mongoose.model('exercise', ExerciseSchema)

// Exports exercise Schema to use throughout the project
module.exports = exercise
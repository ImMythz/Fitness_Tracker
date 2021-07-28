const mongoose = require('mongoose');

// Initialize exercise Schema
const Schema = mongoose.Schema

const ExerciseSchema = new Schema({
    day: {
        type: Date, 
        default: Date.now()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: 'type of exercise required',
        },
        name: {
            type: String,
            trim: true,
            required: 'name of exercise required',
        },
        duration: {
            type: Number,
            required: 'duration of exercise required',
        },
        distance: {
            type: Number,
            required: 'distance of exercise is required',
        },
        weight: {
            type: Number,
            required: 'weight lifted required (if none enter 0)',
        },
        reps: Number,
        sets: Number,
    }]
})

const Workout = mongoose.model('exercise', ExerciseSchema)

// Exports exercise Schema to use throughout the project
module.exports = Workout
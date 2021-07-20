const mongoose = require('mongoose');

// Initialize exercise Schema
const Schema = mongoose.Schema

const ExerciseSchema = new Schema({

})

const exercise = mongoose.model('exercise', ExerciseSchema)

// Exports exercise Schema to use throughout the project
module.exports = exercise
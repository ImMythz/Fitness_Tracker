const router = require("express").Router();
const db = require('../../models')

// Gets all workouts and adds total duration of exercises
router.get('/', async (req , res) => {
    try {
        const workout = await db.Workout.aggregate([
            { $addFields: { totalDuration: { $sum: "$exercises.duration" } } }
        ])

        // Successful response
        res.status(200).json(workout)
    }   catch (err) {
        // Error response
        res.status(500).json(err)
    } 
})

// Get a workout by id
router.put('/:id', async (req , res) => {
    try {
        const workout = await db.Workout.findOneAndUpdate(
            { _id: req.params.id },{ $push:  { exercises: req.body } }, { runValidators: true }
        )

        // Successful response
        res.status(200).json(workout)
    }   catch (err) {
        // Error response
        res.status(400).json(err)
    } 
})

// Create a new workout
router.post('/', async (req , res) => {
    try {
        const workout = await db.Workout.create(req.body)

        // Successful response
        res.status(200).json(workout)
    }   catch (err) {
        // Error response
        res.status(500).json(err)
    } 
})

// Adds total duration of exercises
router.get('/range', async (req , res) => {
    try {
        let workout = await db.Workout.aggregate([
            { $addFields: { totalDuration: { $sum: '$exercises.duration' } } }
        ])
        if (workout.length > 7) {
            workout = workout.splice( 0, workout.length - 7 )
            
        }

        // Successful response
        res.status(200).json(workout)
    }   catch (err) {
        // Error response
        res.status(500).json(err)
    } 
})
module.exports = router;
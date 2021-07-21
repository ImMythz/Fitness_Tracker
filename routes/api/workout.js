const router = require("express").Router();
const db = require('../../models')

// Get all workouts
router.get('/', async (req , res) => {
    try {
        const workouts = await db.Workout.find({})

        // Successful response
        res.status(200).json(workouts)
    }   catch (err) {
        // Error response
        res.status(500).json(err)
    } 
})

// Get a workout by id
router.put('/workout/:id', async (req , res) => {
    try {
        const workout = await db.Workout.findOneAndUpdate(
            {
            _id: req.params.id
            },
            { $push:  {
                exercises: req.body
            }},
            {
                runValidators: true
            }
        )

        // Successful response
        res.status(200).json(workout)
    }   catch (err) {
        // Error response
        res.status(400).json(err)
    } 
})

// Create a new workout
router.post('/workout', async (req , res) => {
    try {
        const workout = await db.Workout.create(req.body)

        // Successful response
        res.status(200).json(workout)
    }   catch (err) {
        // Error response
        res.status(500).json(err)
    } 
})

module.exports = router;
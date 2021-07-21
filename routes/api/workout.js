const router = require("express").Router();
const db = require('../../models')

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

router.get('/:id', async (req , res) => {
    try {
        const workouts = await db.Workout.find({})

        // Successful response
        res.status(200).json(workouts)
    }   catch (err) {
        // Error response
        res.status(500).json(err)
    } 
})

module.exports = router;
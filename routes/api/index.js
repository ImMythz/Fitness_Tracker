// Sets routes to api calls
const router = require('express').Router();
const workoutRoutes = require('./workout')

// Post routes
router.use('/workouts', workoutRoutes);

module.exports = router
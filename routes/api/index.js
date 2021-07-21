// Sets routes to api calls
const router = require('express').Router();
const workoutRoutes = require('./workout')

// Post routes
router.use('/workout', workoutRoutes);

module.exports = router
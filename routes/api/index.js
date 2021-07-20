// Sets routes to api calls
const router = require('express').Router();
const apiRoute = require('./workout')

// Post routes
router.use('/workout', apiRoute);

module.exports = router;
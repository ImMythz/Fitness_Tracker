// Sets routes to api calls
const router = require('express').Router();
const apiRoute = require('./workout')

// Post routes
router.use('/exercise', apiRoute);

module.exports = router;
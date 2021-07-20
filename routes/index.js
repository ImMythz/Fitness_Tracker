// Sets routes to api calls
const router = require('express').Router();
const apiRoutes = require('./api');
const userRoute = require('./userRoute.js');

// API Routes
router.use('/api', apiRoutes);
router.use('/', userRoute )

module.exports = router;
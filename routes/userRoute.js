const path = require("path");
const router = require("express").Router();

// Renders index when no path is defined
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/index.html'))
})

// Renders exercise page
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/exercise.html'))
})

// Renders stats page
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/stats.html'))
})

module.exports = router;
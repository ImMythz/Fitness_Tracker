const path = require("path");
const router = require("express").Router();

// Renders index when no path is defined
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/index.html'))
})

module.exports = router;
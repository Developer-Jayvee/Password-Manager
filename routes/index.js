const express = require('express');
const router = express.Router();



// POST route for form submission
router.get('/sendForm', (req, res) => {
    const randomPassword = Math.random().toString(36).substring(2,12);
    res.json(randomPassword);
});

// GET route for home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});
module.exports = router;
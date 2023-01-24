const express = require('express')
const router = express.Router()


// location controller
const location = require("../controllers/LocationController");

// api location.welcome
router.get('/api',location.welcome)


module.exports= router
const express = require('express');
const {createCourse,GetAllCourse} = require('../contollers/courseController');

const router = express.Router();

router.get("/",GetAllCourse);
router.post("/",createCourse);


module.exports = router;
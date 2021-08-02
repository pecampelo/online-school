// router
const { Router } = require('express');
const Student = require('../models/student');

const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: '🌎',
    });
});

router.post('/', async (req, res, next) => {
    try {
        const student = new Student(req.body);
        const createdStudent = await student.save();
        res.json(createdStudent);
    } catch (error) {
        next(error);
    }      
});

module.exports = router;
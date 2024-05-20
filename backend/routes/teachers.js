const router = require('express').Router();
let Teacher = require('../models/teacher.model');

router.route('/').get((req,res) =>{
    Teacher.find()
        .then(teachers => res.json(teachers))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>{
    const name = req.body.name;
    const lastName = req.body.lastName;
    const mail = req.body.mail;
    const office = req.body.office;
    const area = req.body.area;
    const position = req.body.position;

    const newTeacher = new Teacher({
        name,
        lastName,
        mail,
        office,
        area,
        position,
    });

    newTeacher.save()
        .then(() => res.json('Teacher Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
const router = require('express').Router();
const { response } = require('express');
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

router.route('/:id').get((req, res) => {
    Teacher.findById(req.params.id)
    .then(teacher => res.json(teacher))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Teacher.findByIdAndDelete(req.params.id)
    .then(teacher => res.json('Teacher deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Teacher.findById(req.params.id)
    .then(teacher => {
        teacher.name = req.body.name;
        teacher.lastName = req.body.lastName;
        teacher.mail = req.body.mail;
        teacher.office = req.body.office;
        teacher.area = req.body.area;
        teacher.position = req.body.position;

        teacher.save()
            .then(() => res.json('Teacher updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
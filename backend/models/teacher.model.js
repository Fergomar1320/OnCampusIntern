const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teacherSchema = new Schema ({
    name: { type: String, required: true, trim: true},
    mail: { type: String, required: true, trim: true},
    office: { type: String, required: true, trim: true},
    area: { type: String, required: true, trim: true},
    position: { type: String, required: true, trim: true},
}, {
    timestamps: true,
});

const Teacher = mongoose.model('Teacher', teacherSchema)

module.exports = Teacher;
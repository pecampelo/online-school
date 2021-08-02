const mongoose = require('mongoose');
const { classString, requiredString } = require('./stringModules');
const { Schema } = mongoose;

const studentSchema = new Schema({
  username: requiredString,
  password: requiredString,
  fullName: requiredString,
  image:    String,
  jobTitle: String,
  gender: String,
  nationality: String,
  birthDate: Date,
  email: String,
  classesAttended: classString,
  classesAttending: classString,
}, {
    timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
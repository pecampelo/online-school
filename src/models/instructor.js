import mongoose from 'mongoose';
import { classString, requiredString } from './stringModules';
const { Schema } = mongoose;

const instructorSchema = new Schema({
  username: requiredString,
  password: requiredString,
  name: requiredString,
  image:    String,
  jobTitle: String,
  gender: String,
  nationality: String,
  birthDate: Date,
  email: String,
  coursesInstructed: classString,
  classesInstructed: classString,
}, {
    timestamps: true,
});

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;
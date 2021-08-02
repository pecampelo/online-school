import mongoose from 'mongoose';
import { classString, requiredString } from './stringModules';
const { Schema } = mongoose;

const courseSchema = new Schema({
  title: requiredString,
  description: String,
  image: String,
  price: {
      type: Number,
      required: true,
      min: 0, 
      max: 5000,
  },
  classSyllabus: [{ class: String}],
  instructor: requiredString,
  studentsAttending: [{ student: String }],
}, {
    timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
import mongoose from 'mongoose';
import { classString, requiredString } from './stringModules';
const { Schema } = mongoose;

const courseSchema = new Schema({
    title: requiredString,
    description: String,
    fromCourse: requiredString,
    image:  String,
    format: requiredString,
    instructorResponsible: [{ instructor: String }],
    watchedBy: [{ student: String }],
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
  }, {
      timestamps: true,
  });

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
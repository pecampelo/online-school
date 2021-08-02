const { Sequelize } = require('sequelize');
const Student  = require('./models/student')
const Instructor  = require('./models/instructor')
const Course = require('./models/course')
const Class  = require('./models/class')


const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/postgres')
const connectDatabase = async () => {
      try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}


module.exports = { 
  connectDatabase 
};
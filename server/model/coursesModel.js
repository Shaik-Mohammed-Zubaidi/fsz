const mongoose= require('mongoose');

const usersSchema= new mongoose.Schema({
    title: String,
    description: String,
    link: String
});

const Course= mongoose.model('coursesData',usersSchema);

module.exports= Course;
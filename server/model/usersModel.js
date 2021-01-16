const mongoose= require('mongoose');

const usersSchema= new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    data: {
        Books: Number,
        Games: Number,
        Courses: Number,
    }
});

const usersModel= mongoose.model('usersDetails',usersSchema);;

module.exports= usersModel;
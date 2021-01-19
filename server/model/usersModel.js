const mongoose= require('mongoose');

const usersSchema= new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    progress: {
        books: [],
        games: [],
        courses: []
    }
});

const User= mongoose.model('usersDetails',usersSchema);

module.exports= User;
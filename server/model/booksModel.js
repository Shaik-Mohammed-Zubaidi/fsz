const mongoose= require('mongoose');

const usersSchema= new mongoose.Schema({
    title: String,
    description: String,
    link: String
});

const Book= mongoose.model('booksData',usersSchema);

module.exports= Book;
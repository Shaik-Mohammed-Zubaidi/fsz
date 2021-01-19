const router= require('express').Router();
const Book= require('../model/booksModel');
const Course= require('../model/coursesModel');

router.post('/books', async(req,res)=>{
    try {
        // reading data from the user
        const {title, description, link} = req.body;
        const existingBook = await Book.findOne({title: title});
        if(existingBook){
            res.status(400).json({message: "Book already exists"});
            return;
        }

        const newBook = new Book({
            title,
            description,
            link
        });
        const savedBook=  newBook.save();
        res.json(savedBook);
    } catch (error) {
        res.status(500).json({err: error.message});
    }
});

router.get('/books', async(req,res)=>{
    try {
        const books = await Book.find({});
        console.log("existingBook: ", books);
        if(books.length===0){
            return res.status(400).json({message: "No Books available"});
        }

        res.json(books);
    } catch (error) {
        res.status(500).json({err: error.message});
    }
});

router.post('/courses', async(req,res)=>{
    try {
        // reading data from the user
        const {title, description, link} = req.body;
        const existingCourse = await Course.findOne({title: title});
        if(existingCourse){
            res.status(400).json({message: "Course already exists"});
            return;
        }

        const newCourse = new Course({
            title,
            description,
            link
        });
        const savedCourse=  newCourse.save();
        res.json(savedCourse);
    } catch (error) {
        res.status(500).json({err: error.message});
    }
});

router.get('/courses', async(req,res)=>{
    try {
        const courses = await Course.find({});
        console.log("existingCourse: ", courses);
        if(courses.length===0){
            return res.status(400).json({message: "No Courses available"});
        }

        res.json(courses);
    } catch (error) {
        res.status(500).json({err: error.message});
    }
});

module.exports= router;
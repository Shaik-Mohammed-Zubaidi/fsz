const router= require('express').Router();
const bcrypt= require('bcryptjs');
const jwt= require('jsonwebtoken');
const User= require('../model/usersModel');
const auth = require('../middleware/auth');

router.post('/register', async(req,res)=>{
    try {
        // reading data from the user
        const {email, password} = req.body;
        const existingUser = await User.findOne({email: email});
        if(existingUser){
            res.status(400).json({message: "User account already exists"});
            return;
        }
        // encryption for password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        console.log("passwordHash: ", passwordHash);

        const newUser = new User({
            email,
            password: passwordHash,
            progress: {
                books: [],
                games: [],
                courses: []
            }
        }) 
        const savedUser=  newUser.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({err: error.message});
    }
});

router.post('/login', async(req,res)=>{
    try {
        const {email, password}= req.body;
        const existingUser = await User.findOne({email: email});
        // console.log("existingUser: ", existingUser);
        if(!existingUser){
            return res.status(400).json({message: "User account doesn't exists"});
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if(!isMatch) return res.status(400).json({message: 'Invalid credentials'});

        const token = jwt.sign({ id: existingUser._id}, process.env.JWT_SECRET);
        // console.log(token);
        res.json({
            token,
            user: {
                id: existingUser._id,
                books: existingUser.progress.books,
                games: existingUser.progress.games,
                courses: existingUser.progress.courses,
            }
        });
    } catch (error) {
        res.status(500).json({err: error.message});
    }
});

router.patch('/update',(req,res)=>{
    const {id, games, books, courses}= req.body;
    User.findByIdAndUpdate({_id: id},{progress: {games,books,courses}})
        .then((user)=>{
            user.progress.books= books,
            user.progress.games= games,
            user.progress.courses= courses,
            res.json({message: "done"});
        })
        .catch(()=>{
            res.status(404).json({message: "No such user"});
        })
});

router.get('/', auth, async (req, res) => {
    try {
      // reading the data from user
      const user = await User.findById(req.user);
      res.json({
        id: user._id,
        email: user.email,
        password: user.password,
        progress: user.progress
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

module.exports= router;
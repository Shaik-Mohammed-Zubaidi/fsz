const router= require('express').Router();
const bcrypt= require('bcryptjs');
const jwt= require('jsonwebtoken');
const User= require('../model/usersModel');

router.post('/register', async(req,res)=>{
    try {
        // reading data from the user
        const {email, password} = req.body;
        const existingUser = await User.findOne({email: email});
        if(existingUser){
            return res.status(400).json({message: "User account already exists"});
        }
        // encryption for password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        console.log("passwordHash: ", passwordHash);

        const newUser = new User({
            email,
            password: passwordHash
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
                id: existingUser._id
            }
        });
    } catch (error) {
        res.status(500).json({err: error.message});
    }
});

// router.patch('/update',(req,res)=>{
//     const user= req.body;
//     const {email,Books, Games, Courses} = user;
//     usersModel.find({email}).then(userPresent=>{
//         usersModel.findByIdAndUpdate(userPresent.id,{Books, Games, Courses}).then(_=>{
//             res.send("done broo");
//         }).catch(_=> res.send("err"));
//     }).catch(_=> res.send("error"));
// });

module.exports= router;
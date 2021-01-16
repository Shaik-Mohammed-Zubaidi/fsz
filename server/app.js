const express= require('express');
const usersModel= require('./model/usersModel');

const app= express();

app.use(express.json());

app.post('/api/fsz/user',(req,res)=>{
    const user= new usersModel({...req.body});

    user.save().then(val=>res.send(val)).catch(err=>console.log(err));
});

app.patch('/api/fsz/user',(req,res)=>{
    const user= req.body;
    const {email,Books, Games, Courses} = user;
    usersModel.find({email}).then(userPresent=>{
        usersModel.findByIdAndUpdate(userPresent.id,{Books, Games, Courses}).then(_=>{
            res.send("done broo");
        }).catch(_=> res.send("err"));
    }).catch(_=> res.send("error"));
});

app.get('/api/fsz/user',(req,res)=>{
    const user= req.query;
    usersModel.find(user).then(result=>{
        res.json(result);
    }).catch(err=>{
        res.send("error");
        console.log(err);
    });
});


module.exports= app;
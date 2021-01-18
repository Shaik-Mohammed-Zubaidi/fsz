const express= require('express');
const mongoose = require("mongoose");
const cors= require('cors');
const bodyParser= require('body-parser');
require('dotenv').config();

const app= express();
const PORT= process.env.PORT || 5000;

const whitelist = ['http://localhost:3000',"http://localhost:6000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(_=> console.log("Connected to MongoDB")).catch(err=> console.log("Exception Occured",err));

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));

app.use('/fsz/api/users',require('./routes/user'));
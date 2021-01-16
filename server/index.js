const app = require("./app");
const mongoose = require("mongoose");
const DATABASE_URL= require('./constants');

const PORT= 5000;

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(_=> console.log("Connected to MongoDB")).catch(err=> console.log("Exception Occured",err));

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));

module.exports= mongoose;
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/dataBase');

var personSchema = mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String,
    email : String,
    phone : Number,
    password : String,
    role : String ,
    imageURL : String,
    passwordChangedAt : Date,
    passwordResetToken : String ,
    passwordResetExpires : Date ,
    active: Boolean,
    firstLogIn : Boolean
 });
 var User = mongoose.model("User", personSchema);
 module.exports = User;

const mongoose=require("mongoose");
const validator=require("validator");
const password=require('App/public/password.js');
mongoose.connect(`mongodb+srv://parkRytDB:${password}@cluster0.kprvu.mongodb.net/parkRytDB?retryWrites=true&w=majority`,{useNewUrlParser:true,
useCreateIndex:true,useUnifiedTopology:true, useFindAndModify: false});
const userSchema=new mongoose.Schema({
    name:{
       type:String,
       required:true 
    },
    email:{
        type:String,
        required:true,
        validate:validator.isEmail
    },
    phoneno:{
        type:Number,
        required:true,
        minlength:10
    },
    carnumber:{
        type:String,
        required:true
    }
});
const userModel=mongoose.model("parkRytDB",userSchema);
module.exports=userModel;
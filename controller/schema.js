const mongoose=require('mongoose')
const config=require('../configs/config')
const validator=require('validator')

mongoose.connect(config.DB,{useNewUrlParser:true,useUnifiedTopology:true}).then(conn=>{
    console.log("buyer DB connected")
    // console.log(conn)
})

const carSchema=new mongoose.Schema({
    nameOfCar:{
        type:String,
        required:true
    },
    engineNo:{
        type:String,
        required:true
    },
    chasisNo:{
        type:String,
        required:true
    },
    registrationPlate:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
        minlength:10
    },
    address:{
        type:String,
        required:true
    },
    plaeOfRegistration:{
        type:String,
        required:true
    }
})

const carModel=mongoose.model('carSchema',carSchema)

module.exports=carModel
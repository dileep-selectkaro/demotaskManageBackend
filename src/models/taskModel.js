const mongoose=require("mongoose");
const taskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    vendor:{
        type:String,
        required:true,
        trim:true,
    },
    price:{
        type:Number,
        required:true, 
        trim:true
    },
    quantity:{
        type:Number,
        required:true,
        trim:true
    }

},{timestamps:true});

module.exports=mongoose.model("task",taskSchema)
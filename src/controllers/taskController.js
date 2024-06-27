const Task=require("../models/taskModel");

//=====create===

const createTask=async(req,res)=>{
    const data=req.body;
    const{name,vendor,price,quantity}=data;

    //regex
    const alphabeticRegex=/^[A-Za-z ]+$/;
    const numericRegex=/^[0-9]*\.?[0-9]+$/;
    //validation
    if(!name){
        return res.status(400).send({message:"Name field is required"});
    }else if(!alphabeticRegex.test(name)){
        return res.status(400).send({message:"Name must contain only alphabetic characters"})
    }
    if(!vendor){
        return res.status(400).send({message:"Vendor field is required"});
    }else if(!alphabeticRegex.test(vendor)){
        return res.status(400).send({message:"Vendor must contain only alphabetic characters"})
    }
    if(!price){
        return status(400).send({message:"Price field is required"});
    }
    else if(!numericRegex.test(price)){
        return res.status(400).send({message:"Price must contain only Numberic"})
    }
    if(!quantity){
        return  res.status(400).send({message:"quantity field is required"});
    }
    else if(!numericRegex.test(quantity)){
        return res.status(400).send({message:"Quantity must contain only Numberic"})
    }
    try{
        const saveData=await Task.create(data);
        res.status(201).send({message:"Data saved Successfully",saveData});
    }
    catch(err){
        console.log("error",err);
        res.status(500).send({message:"Internal Server Error",err});
    }

}

//==========fetch Task========

const fetchedTask=async(req,res)=>{
    try{
      const data=await Task.find();
      res.status(200).send({message:"Data fetched Successfully",data})
      
    }
    catch(err){
        console.log("error",err);
        res.status(500).send({message:"Internal Server Error",err});
    }
}


//======update==========
const updateTask=async(req,res)=>{
    const id=req.params.id;
    const data=req.body;
    const{name,vendor,price,quantity}=data;

    //regex
    const alphabeticRegex=/^[A-Za-z ]+$/;
    const numericRegex=/^[0-9]*\.?[0-9]+$/;

    if(!alphabeticRegex.test(name)){
        return res.status(400).send({message:"Name must contain only alphabetic characters"})
    }   
    
    if(!alphabeticRegex.test(vendor)){
        return res.status(400).send({message:"vendor must contain only alphabetic characters"})
    }  
    if(!numericRegex.test(price)){
        return res.status(400).send({message:"Price must contain only Numberic "})
    }  
    if(!numericRegex.test(quantity)){
        return res.status(400).send({message:"quantity must contain only Numberic"})
    }  

    try{
        const updatedData=await Task.findByIdAndUpdate(id,{name,vendor,price,quantity},{new:true})
         res.status(200).send({message:"Updated successfully",updatedData});
    }
    catch(err){
        console.log("error",err);
        res.status(500).send({message:"Internal Server Error",err});
    }
}

deleteTask=async(req,res)=>{
    const {id}=req.params;
    try{
       const deletedData=await Task.findByIdAndDelete(id);
       res.status(200).send({message:"Data is deleted Suceessfully",deletedData})
    }
    catch(err){
        console.log("error",err);
        res.status(500).send({message:"Internal Server Error",err});
    }
}



module.exports={createTask,fetchedTask,updateTask,deleteTask}
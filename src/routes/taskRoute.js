const express=require("express");
const { createTask, fetchedTask,updateTask ,deleteTask} = require("../controllers/taskController");
const router=express.Router();

router.post("/create",createTask);
router.get("/fetched",fetchedTask);
router.put("/update/:id",updateTask);
router.delete("/delete/:id",deleteTask)

module.exports=router;
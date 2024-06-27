const express=require("express");
const app=express();
const dotenv=require("dotenv");
const cors=require("cors");
const mongoose=require("mongoose");
const taskRoute=require("./routes/taskRoute");

dotenv.config();
const PORT=process.env.PORT||4000
//middleware 
app.use(express.json());
app.use(cors());PORT
mongoose.connect(process.env.MongoURI||"mongodb+srv://dileepkm:L3cuCdGwQQWTF3Hs@cluster0.iqkms8u.mongodb.net/task")
.then(()=>{
  console.log("MongoDB connection is successfully")
})
.catch((error)=>{
    console.log("Database connection Error:",error);
})

//routes
app.use("/",taskRoute);

app.listen(PORT,()=>{
    console.log("Server Listening on Port no",PORT)
})


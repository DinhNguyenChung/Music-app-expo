const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const mongoUrl = "mongodb+srv://nguyenchung:admin@cluster0.8z0ko.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const JWT_SECRET="hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jdsds039[]]pou89ywe";
mongoose
    .connect(mongoUrl)
    .then(()=>{
    console.log("Connected to database");
    }).catch((err)=>{
        console.log("Error: ",err);
    })
    require("./UserDetails");
const User = mongoose.model("UserInfo");


app.get("/",(req,res)=>
{
    res.send({status:"Started server"});
})  
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.send(users);
});


app.post("/register",async(req,res)=>
{
    const {name,email,phone,password}= req.body;
    const oldUser = await User.findOne({email:email});
    if(oldUser){
        return res.send({data:"User already exists"});
    }
    const encryptedPassword = await bcrypt.hash(password,10);
    try {
        await User.create({
            name:name,
            email:email,
            phone,
            password:encryptedPassword,
        });
        res.send({status:"ok",data:"User created"});
    } catch (error) {
        res.send({status:"error",data:error});
    }
})

app.post("/login-user",async(req,res)=>
{
    const {email,password}= req.body;
    const oldUser = await User.findOne({email:email});
    if(!oldUser){
        return res.send({data:"User does not exist"});
    }
    if(await bcrypt.compare(password,oldUser.password)){
        // res.send({data:"Login Success"});
        const token = jwt.sign({email:oldUser.email},JWT_SECRET);
        if(res.status(201)){
            return res.send({status:"ok",data:token});
        }
        else{
            return res.send({status:"error",data:"Invalid password"});
        }

    }
})
app.post("/userdata", async (req, res) => {
    const { token } = req.body;
    try {
      const user = jwt.verify(token, JWT_SECRET);
      const useremail = user.email;
  
      User.findOne({ email: useremail }).then((data) => {
        return res.send({ status: "Ok", data: data });
      });
    } catch (error) {
      return res.send({ error: error });
    }
  });





app.listen(5001,()=>
{
    console.log("Server is running on port 5001");
    
})
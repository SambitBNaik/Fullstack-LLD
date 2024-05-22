const express= require("express");
require("dotenv").config();
const app=express();
const dbConfig=require("./config/dbConfig");
const userRouter=require("./routes/userRouter");
const movieRouter=require("./routes/movieRouter");
const theatreRouter = require("./routes/theatreRouter");
console.log(dbConfig);

// registring the user -> name, email , password

// application level middleware which parse req body
app.use(express.json());

//app/v1/users/registerUser
app.use("/app/v1/users",userRouter);
app.use("/app/v1/users/admin", movieRouter);
app.use("/app/v1/users/theatres", theatreRouter);

app.get('/',(req, res)=>{
    res.send("Hello World");
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is listining to ${process.env.PORT}`);
});


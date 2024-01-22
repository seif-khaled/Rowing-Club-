const express = require('express');
const path=require("path");
const bodyParse = require('body-parser');
const Dashboard=require("./routes/Dashboard");
const Resturant=require("./routes/Resturant");
const Packages=require("./routes/Packages");
const app = express();
app.use(bodyParse.urlencoded({ extended: true }));
app.use(express.static(path.join("public")));
app.use(express.static(path.join("data")));




app.use("/Dashboard",Dashboard);
app.use("/Resturant",Resturant);
app.use("/Packages",Packages);



app.listen(3000,()=>{
    console.log("server started at port 3000");
});
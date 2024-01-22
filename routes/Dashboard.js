const express = require('express');
const path=require("path");
const bodyParse = require('body-parser');
const Router = express.Router();
Router.use(bodyParse.urlencoded({ extended: true }));
Router.use(express.static(path.join("public")));



Router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","Dashboard.html"))
});
module.exports = Router;
const express = require('express');
const serverless = require('serverless-http');
const path = require("path");
const app = express();
const router = express.Router();

app.use(express.static(path.join("public")));

router.get('/Dashboard', (req, res) => {
    res.sendFile(path.join(__dirname,"..","views","Dashboard.html"));
});

router.get('/Packages', (req, res) => {
    res.sendFile(path.join(__dirname,"..","views","Packages.html"));
});

router.get('/Resturant', (req, res) => {
    res.sendFile(path.join(__dirname,"..","views","Resturant.html"));
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
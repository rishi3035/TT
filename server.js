const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.set("view engine", "ejs");

mongoose.connect("mongodb+srv://rishi3035singh:gYTqOKnoFo9ZNMxQ@cluster0.tvugki1.mongodb.net/user")
//mongodb+srv://rishi3035singh:gYTqOKnoFo9ZNMxQ@cluster0.tvugki1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//mongodb+srv://rishi3035singh:<password>@cluster0.tvugki1.mongodb.net/

//create a data schema 

const detailsSchema = {
    name: String,
    phone: String
}
const details = mongoose.model("details",detailsSchema);

const userSchema ={
    firstname : String,
    lastname : String,
    email : String
}
const userdata = mongoose.model("userdata",userSchema);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.get("/index.html", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.get("/login.html", function(req, res) {
  res.sendFile(__dirname + "/login.html");
})

app.get("/index1.html", function(req, res) {
    res.sendFile(__dirname + "/index1.html");
  })

app.get("/admin-access", function(req, res){
    res.sendFile(__dirname+"/admin-access.html")
})


app.get("/style1.css", function (req, res) {
    res.sendFile(__dirname + "/style1.css");
});

app.get("/style.css", function (req, res) {
    res.sendFile(__dirname + "/style.css");
});

app.get("/style2.css", function (req, res) {
    res.sendFile(__dirname + "/style2.css");
});


app.get("/hero-banner.jpg", function (req, res) {
    res.sendFile(__dirname + "/hero-banner.jpg");
});

app.get("/footer-bg.jpg", function (req, res) {
    res.sendFile(__dirname + "/footer-bg.jpg");
});

app.get("/offer-banner-1.jpg", function (req, res) {
    res.sendFile(__dirname + "/offer-banner-1.jpg");
});

app.get("/offer-banner-2.jpg", function (req, res) {
    res.sendFile(__dirname + "/offer-banner-2.jpg");
});

app.get("/offer-banner-3.jpg", function (req, res) {
    res.sendFile(__dirname + "/offer-banner-3.jpg");
});

app.get("/service-image.png", function (req, res) {
    res.sendFile(__dirname + "/service-image.png");
});

app.post("/login",function(req, res){
    let newdetails = new details({
        name: req.body.name,
        phone:req.body.phone
    })
    newdetails.save();
    res.redirect('/index1.html');
   
})

app.post("/signup",function(req, res){
    console.log(req.body)
    let newdetails = new userdata({
        firstname: req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email
    })
    newdetails.save();
    res.redirect('/index1.html');
   
})

app.listen(3000, function() {
    console.log("server is running");
})
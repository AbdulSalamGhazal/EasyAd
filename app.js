const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

mongoose.connect("mongodb://localhost:27017/EasyAd");


const db = mongoose.connection;
db.on("error", console.error.bind(console, " fsd error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();
app.engine("ejs", ejsMate);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.get('/' , (req,res) =>{
    res.render('pages/home')
})
app.get('/dashboard' , (req,res) =>{
    res.render('pages/dashboard')
})
app.get('/social-media' , (req,res) =>{
    res.render('pages/social-media')
})
app.get('/social-media/new' , (req,res) =>{
    res.render('pages/new')
})
app.get('/influencer' , (req,res) =>{
    res.render('pages/influencer')
})

app.all('*' , (req,res) => {
    res.render('pages/notfound')
})


app.listen(4000, () => {
    console.log("serving at 4000 port");
});
  




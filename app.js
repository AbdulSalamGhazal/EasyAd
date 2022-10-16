const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Campaign = require('./models/campaign')

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

const restartData_Campaign = async()=>{
    const camp = new Campaign({
        name:'test name campaign',
        goal: 'visits=test',
        platform:'google , meta , snapchat , tiktok',
        budget: 2000,
        
    
    })
    await camp.save()
    console.log(camp)
}
// restartData_Campaign()



app.get('/' , (req,res) =>{
    res.render('pages/home')
})
app.get('/dashboard' , (req,res) =>{
    res.render('pages/dashboard')
})



app.get('/social-media' , async(req,res) =>{
    const campaigns = await Campaign.find({})
    res.render('pages/social-media',{campaigns})
})
app.get('/social-media/new' , (req,res) =>{
    res.render('pages/social-media/new')
})
app.post('/social-media' , async(req,res)=>{
    const campaign = new Campaign(req.body.campaign);
    await campaign.save()
    res.redirect('/social-media')
})
app.get('/social-media/:id' , async(req,res) => {
    const campaign = await Campaign.findById(req.params.id)
    if(!campaign){
        return res.redirect('/social-media')
    }
    res.render('pages/social-media/show' , {campaign})
})
app.get('/social-media/:id/edit' , async(req,res) => {
    const campaign = await Campaign.findById(req.params.id)
    if(!campaign){
        return res.redirect('/social-media')
    }
    res.render('pages/social-media/edit' , {campaign})
})
app.put('/social-media/:id', async(req,res) => {
    const {id} = req.params
    const campaign = await Campaign.findByIdAndUpdate(id, {
        ...req.body.campaign,
    });
    res.redirect(`/social-media/${id}`)
})

app.delete('/social-media/:id', async(req,res) => {
    const {id} = req.params
    await Campaign.findByIdAndDelete(id)
    res.redirect('/social-media')
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
  




const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Campaign = require('./models/campaign')
const Influencer = require('./models/influencer')
const session = require("express-session");
const flash = require("connect-flash")


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

const sessionConfig = { 
    secret : "thisshouldbeabettersecret",
    resave: false,
    saveUninitialized: true,
    cookie:{ 
      httpOnly : true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge : 1000 * 60 * 60 * 24 * 7,
    }
}
app.use(session(sessionConfig)) 

app.use(flash())

app.use((req,res,next) =>{ 
    res.locals.currentUser = req.user 
    res.locals.success = req.flash("success")
    res.locals.error = req.flash("error")
    next()
  })


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
    req.flash("success","Successfully made a new campaign!")
    res.redirect('/social-media')
})
app.get('/social-media/:id' , async(req,res) => {
    const campaign = await Campaign.findById(req.params.id)
    if(!campaign){
        req.flash("error","Cannot find that campaign!")
        return res.redirect('/social-media')
    }
    res.render('pages/social-media/show' , {campaign})
})
app.get('/social-media/:id/edit' , async(req,res) => {
    const campaign = await Campaign.findById(req.params.id)
    if(!campaign){
        req.flash("error","Cannot find that campaign!")
        return res.redirect('/social-media')
    }
    res.render('pages/social-media/edit' , {campaign})
})
app.put('/social-media/:id', async(req,res) => {
    const {id} = req.params
    const campaign = await Campaign.findByIdAndUpdate(id, {
        ...req.body.campaign,
    });
    req.flash("success","Successfully updated a campaign!")
    res.redirect(`/social-media/${id}`)
})

app.delete('/social-media/:id', async(req,res) => {
    const {id} = req.params
    await Campaign.findByIdAndDelete(id)
    req.flash("success","Successfully deleted campaign!")
    res.redirect('/social-media')
})

async function filterSearch(search){
    const influencers = await Influencer.find({})
    const { name , field, platform, followers, rangeOfCost,date} = search
    filtered = []
    for ( let influencer of influencers){
        if( !name || influencer.name.includes(name)){
            if( !field || influencer.field === field){
                if( !platform || influencer.platform.includes(platform)) {
                    if( !followers || influencer.followers <= followers) {
                        if( !rangeOfCost || influencer.rangeOfCost <= rangeOfCost) {
                            if( !date || influencer.availableDates.includes(date)){
                                filtered.push(influencer)

                            }
                        }

                    }

                }

            }
        }
    }
    return filtered
}




app.get('/influencer' , async(req,res) =>{
    if(Object.keys(req.query).length !== 0){
        const influencers = await filterSearch(req.query)
        res.render('pages/influencerPages/index', {influencers})
    }else{
        const influencers = await Influencer.find({})
        res.render('pages/influencerPages/index', {influencers})
    }

})
app.get('/influencer/:id' , async(req,res) => {
    const influencer = await Influencer.findById(req.params.id)
    if(!influencer){
        req.flash("error","Cannot find that influencer!")
        return res.redirect('/influencer')
    }
    res.render('pages/influencerPages/show' , {influencer})
})
app.get('/influencer/:id/contact' , async(req,res) => {
    const influencer = await Influencer.findById(req.params.id)
    if(!influencer){
        req.flash("error","Cannot find that influencer!")
        return res.redirect('/influencer')
    }
    res.render('pages/influencerPages/contact' , {influencer})
})
app.get('/influencer/ads' , (req,res) =>{
    res.render('pages/influencerPages/contact')
})
app.post('/influencer/ads' , (req,res) =>{
    
})

app.all('*' , (req,res) => {
    res.render('pages/notfound')
})
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Oh No, Something Went Wrong!";
    res.status(statusCode).render("error", { err });
  });

app.listen(4000, () => {
    console.log("serving at 4000 port");
});
  




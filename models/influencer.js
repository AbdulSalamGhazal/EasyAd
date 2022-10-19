const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const influencerSchema = new Schema({
    name: String,
    age: Number,//
    gender: String,//
    field: String,
    nationality: String,
    Desc: String,
    platform: Array,
    location: String,//
    followers: Number,
    rangeOfCost: Number,
    availableDates: Array,//
    accounts: Array,//
    image: String
})

module.exports = mongoose.model('influencer',influencerSchema)
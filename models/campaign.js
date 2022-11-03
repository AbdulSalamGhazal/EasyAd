const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const campaignSchema = new Schema({
    name: String,
    goal: String,
    platform: Array,
    budget: Number,
    audiunce : String,
    start_date: String,
    end_date: String,
    country: Array,
    interest: Array,
    age: Array,
    gender: Array,
    headline: String,
    image: String,
    URL: String,
    CTA: String,
    // below data is not from user
    status:{
        type: Boolean,
        default: true,
    },
    spend:Number,
    impression: Number,
    event_A: Number,
    event_B: Number,
})
campaignSchema.pre('save', function() {
    this.spend = Math.floor(Math.random() * 1500) +1
    this.impression = Math.floor(Math.random() * 100000) +1
    this.event_A = Math.floor(Math.random() * 500) +1
    this.event_B = Math.floor(Math.random() * 100) +1
});

module.exports = mongoose.model('campaign',campaignSchema)
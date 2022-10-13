const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const campaignSchema = new Schema({
    name: String,
    goal: String,
    platform: {
        type:String,
        lowercase: true,
        enum:['google','meta','snapchat','tiktok']
    },
    budget: Number,
    audiunce : String,
    start_date: Date,
    end_date: Date,
    // below data not from user
    status:{
        type: Boolean,
        default: true,
    },
    spend:Number,
    impression: Number,
    event_A: Number,
    event_B: Number,
})
module.exports = mongoose.model('campaign',campaignSchema)
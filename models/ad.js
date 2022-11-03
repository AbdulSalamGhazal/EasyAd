const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const adSchema = new Schema({
    Iname: String,//
    cost: Number,
    platform: Array,
    date: String,
    brandname: String,//
    website: String,//
    product: String,//
    materials: Array,//
    details: String,//
    status:{
        type: String,
        default: 'Review'//Declined Approved 
    },
    // below data is not from the user
    impression: Number,
    clicks: Number,
    event_A: Number,
    event_B: Number,
    dec_message:{
        type:String,
        default: "",
    }
})
adSchema.pre('save', function() {
    if(this.status === 'Approved'){
        this.impression = Math.floor(Math.random() * 100000) +1
        this.clicks = Math.floor(Math.random() * 8000) +1
        this.event_A = Math.floor(Math.random() * 500) +1
        this.event_B = Math.floor(Math.random() * 100) +1
    }        
});

module.exports = mongoose.model('ad',adSchema)
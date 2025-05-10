const mongoose = require('mongoose')
const assetSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    owner:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    createdAt: {type:Date,default: Date.now},


});
module.exports = mongoose.model("Asset",assetSchema);
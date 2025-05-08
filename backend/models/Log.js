const mongoose = require("mongoose")

const logScehema = new mongoose.Schema({
    action: String,
    user : String,
    time:{type : Date , default:Date.now},



})
module.exports = mongoose.model("Log",logSchema)
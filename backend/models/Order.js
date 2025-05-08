const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    buyer:{type: mongoose.Schema.Types.ObjectId, ref:"User"},
    asset:{type:mongoose.Schema.Types.ObjectId,ref:"Asset"},
    createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Order",orderSchema);
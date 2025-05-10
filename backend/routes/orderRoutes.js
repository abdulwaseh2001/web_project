const express = require('express');
const Order = require('../models/Order');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post("/",auth,async(req,res) =>
{
    const order = await Order.create({buyer: req.user.id,asset:req.body.assetId})
    res.status(201).json(order)

})

router.get("/",auth,async(req,res)=>{
    const orders = await Order.find({buyer:req.user.id}).populate("asset")
    res.json(orders)


})
module.exports = router
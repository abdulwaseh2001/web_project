const express = require("express");
const Asset = require("../models/Asset");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/",async(req,res) =>
{
    const assets = await Asset.find().populate("owner","name")
    res.json(assets)

})

router.post("/",auth,async(req,res)=>
{
    const asset = await Asset.create({...req.body,owner: req.user.id})
    res.status(201).json(asset)

})
router.put("/:id".auth,async(req,res)=>
{
    const asset = await Asset.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(asset)

})

router.delete("/:id",auth,async(req,res)=>
{
    await Asset.findByIdAndDelete(req.params.id)
    res.json({msg:"deleted"})

})
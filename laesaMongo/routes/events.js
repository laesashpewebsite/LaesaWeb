const express=require("express");
const router=express.Router();
const verify=require("./verifyToken");
const Event=require("../models/Events");

// Gets all of our events
router.get("/", async (req,res)=>{
    try{
        const events=await Event.find();
        res.json(events);
    }catch(err){
        res.json({message:err});
    }
});

// Find with special id
router.get("/:eventId", async (req,res)=>{
    try{
        const event=await Event.findById(req.params.eventId);
        res.json(event);
    }
    catch(err){
        res.json({message:err});
    }
});

router.post("/", async (req,res)=>{
    const event=new Event({
        eventName:   req.body.eventName,
        category:    req.body.category,
        date:        req.body.date,
        pointsValue: req.body.pointsValue,
        description: req.body.description,
        speakers:    req.body.speakers
    });

    try{
        const savedEvent=await event.save();
        res.json(savedEvent);
    }catch(err){
        res.json({message:err});
    }
});

// Needs JWT Access Token
router.delete("/:eventId", verify , async (req,res)=>{
    try{
        const removedEvent= await Event.deleteOne({_id: req.params.eventId}); /* Bug Found */
        res.json(removedEvent);
    }catch(err){
        res.json({message:err});
    }
});
// update events - Need to test
router.patch("/:eventId", verify, async (req,res)=>{
    try{
        const updatedEvent= Event.updateOne(
            { _id:req.params.eventId}, 
            { $set: { title:req.body.title} }
        );
        res.json(removedEvent);
    }catch(err){
        res.json({message:err});
    }
});

module.exports=router;
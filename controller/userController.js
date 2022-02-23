

const user = require("../models/user")
var User=require("../models/user")
var AboutUser =require("../models/aboutUser")
var router=require("../routes/user")
const moment=require("moment")


// *****************Create Page*******************
const createpage=async (req,res)=>{
   const date_data=(moment(new Date(req.body.date)).format());


    const datastoring = {
        username: req.body.username,
        age: req.body.age,
        date: date_data
     
    };
    const createDataSAve=await new User(datastoring)
    createDataSAve.save()
    console.log(createDataSAve);
    res.status(201).send('Successfully created');

}
// **********************get page**********************
const getPage=async(req,res)=>{
    try{
        const getData=await  User.find()
    res.status(200).send(getData);
    }catch(err){
        res.status(404).send({status:404,message:"Not Found"})
    }
}
// ***************** Adding Pagination ****************
const limitPage=async(req,res)=>{
    try{
        const limitValue = req.query.limit || 1;
        const skipValue = req.query.skip || 1;



        const posts = await User.find().skip(sortValue)
    res.status(200).send(posts)
    }catch(err){
        res.status(400).send({status:400,message:"Not Found"})
    }
}
// ***********sorting Ascending or Decending Order by*********
const sorting=async(req,res)=>{

    try{
        // const greaterthan=await User.find({ age : { $gt :  40 }})
        const lessthan=await User.find({ age : { $lt :  20 }})

        
        res.send(lessthan)
    }catch(err){
        res.send("Not Found")
    }
}

// *****************  $in operator**************
const exist=async(req,res)=>{
    try{
        const check_exist=await User.find(({username: {$in: [ "Isha"]}}))
        res.send(check_exist)
    }catch(err){
        res.send(err)
    }
}
// ***************** find One**************
const find_one=async(req,res)=>{
    try{
        const data_find_one=await User.findOne()
        res.send(data_find_one)
    }catch(err){
        res.send(err)
    }
}

// **********equal data ***************
const equal_data=async(req,res)=>{
    try{
        const equaldata=await User.find({username:{$eq:"Mayank"}})

        res.send(equaldata)
    }catch(err){
        res.send(err)
    }
}
// ************ADD in about schema***********
const add_aboutuser=async (req,res)=>{
    const aboutDataSave=await new AboutUser(req.body)
    aboutDataSave.save()
    res.status(201).send('Successfully Added your about');

}


// *************Populate****************
const add_schema=async (req,res)=>{
   
  const data=AboutUser.find()
  .populate("userBy")
  .then(p=>res.send(p))
  .catch(error=>console.log(error));
    

};
// ***********Aggregation Lookup*************
const  agrregate_data=async(req,res)=>{
    const data=User.aggregate([
        {$lookup:{
            from:'aboutusers',
            localField:"_id",
            foreignField:"userBy",
            as: "AboutInfo",

            
        },
    },
        {
            $unwind: "$AboutInfo",
          },
    ])
    .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        console.log(error);
      });}
// **************** Greater than Less than  On time****************

const get_time=async(req,res)=>{
    // console.log(Date.now);
   try{ const data=await User.find({date:{ $lt :("2022-04-29T00:00:00.000Z")} })
    res.send(data);
}catch(err){
    res.send(err)
}
}
module.exports={createpage,getPage,limitPage,sorting,exist,find_one,equal_data,add_aboutuser,add_schema,
    agrregate_data,get_time}
const mongoose = require('mongoose');
const resourceSchema=mongoose.Schema({
    name:{
      type:String,
      required:[true,"Please provide a place name for Resource"],
      trim:true,
      unique:[true,"Name must be unique"],
      minLength:[6,"Name must be at least 3 characters"],
      maxLength:[50,"Name is too large"]
    },
    description:{
      type:String,
      required:true
    },
   
  },{
    timstamps:true,
  })
  
  const Resource=mongoose.model('Resource',resourceSchema)

  module.exports=Resource;

const { getResourceService, createResourceService } = require('../services/resource.services');


exports.getResources=async(req,res,next)=>{
    try
    {
     
      const resources=await getResourceService()
      res.status(200).json({
        status:"successfully get data from database",
        messege:"Data get successfully",
        data:resources
      })
    }
    catch(error)
    {
       res.status(400).json({
        status:'fail to get data',
        messege:'Data is not available',
        error:error.messege
       })
    }
   
  }

  exports.createResource=async(req,res,next)=>{
    try
    {
     
      const result= await createResourceService(req.body)

     
      res.status(200).json({
        status:"success",
        messege:"Data inserted",
        data:result
      })
    }
    catch(error)
    {
       res.status(400).json({
        status:'fail',
        messege:'Data is not inserted',
        error:error.messege
       })
    }
   
  }

  exports.fillUpload=async(req,res)=>{
 
    try{
      res.status(200).json(req.file)
    }
    catch(error)
    {
      
         res.status(400).json({
          status:'fail',
          messege:'File is not uploaded',
          error:error.messege
         })
      
    }
  }
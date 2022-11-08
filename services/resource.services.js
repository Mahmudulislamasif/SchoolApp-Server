const Resource = require('../models/resource');
exports.getResourceService=async()=>{
    const resources=await Resource.find({})
    return resources
}
exports.createResourceService=async(data)=>{
    const resource=await Resource.create(data)
    return resource
}


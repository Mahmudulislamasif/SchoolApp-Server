const express = require('express');
const router=express.Router()
const resourceController=require('../controllers/resource.controller')
const uploader=require("../middleware/uploader")

router.post("/file-upload",uploader.single("file"), resourceController.fillUpload)
router.route('/')
.get(resourceController.getResources)
.post(resourceController.createResource)






module.exports=router
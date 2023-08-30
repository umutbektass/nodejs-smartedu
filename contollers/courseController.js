const Course = require('../models/Course');


exports.createCourse = async(req,res)=>{
  
    await Course.create(req.body)
   .then((data) => {
        res.status(201).json({
            status:true,
            message:"Kayıt başarılı.",
            data
        })
    }).catch((err) => {
        res.status(400).json({
            status:false,
            message:err.message
        })
        
    });
}
exports.GetAllCourse = async(req,res)=>{
    await Course.find().then((result) => {
        res.status(200).json({
            status:true,
            data:result
        })
        
    }).catch((err) => {
        res.status(400).json({
        status:false,
        message:err.message
    })
    });

}
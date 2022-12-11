const studentModel= require("../models/studentModel")

const createstudent= async function( req,res){
    try{
        let data= req.body

        let savedData= await studentModel.create(data)
        return res.status(201).send({status: true, msg: "data created successfully", data:savedData})



    }catch(err){
        res.status(500).send({status: false, message: err.message})
    }

    
}



const getstudent= async function( req,res){
    try{

        let data = req.query
        let {subject, name}= name
        let savedData= await studentModel.find(data)
        return  res.status(200).send({status: true, data: savedData})

    }catch(err){
        res.status(500).send({status: false, message: err.message})
    }

}

const updatestudent= async function( req,res){
    try{



    }catch(err){
        res.status(500).send({status: false, message: err.message})
    }

}

const deletestudent= async function( req,res){
    try{
        let studendId= req.params.id

        let savedData= await studentModel.findOneAndUpdate({id: studendId, isdeleted: false}, {$set:{isdeleted: true}})

        return res.status(200).send()





    }catch(err){
        res.status(500).send({status: false, message: err.message})
    }

}

module.exports= {createstudent,getstudent,updatestudent,deletestudent}
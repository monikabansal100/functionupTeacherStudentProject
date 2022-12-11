const teacherModel= require("../models/teacherModel")

const createTeacher= async function( req,res){
    try{
        let data= req.body
        let{name, password, email}= data

        let saveddata= await teacherModel.create(data)
        return res.status(201).send({status: true, msg: "data created successfully", data:saveddata})


    }catch(err){
        res.status(500).send({status: false, message: err.message})
    }

}

const login= async function( req,res){
    try{
        let data= req.body
        let{password, email}= data

        let token= jwt.sign({data}, "functionupTeacherStudentBackendProject")
        return res.status(200).send({status: true, data: token})

        res.setheader= token

    }catch(err){
        res.status(500).send({status: false, message: err.message})
    }

}

module.exports= {createTeacher, login}
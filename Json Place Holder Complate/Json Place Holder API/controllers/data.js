var DATA = require('../models/data')

exports.createData = async function(req, res, next){

    try {
        let Data = await DATA.create(req.body)
        
        res.status(201).json({
            ststus : "success",
            message : "Data Add Successfully",
            data : Data
        })
    } catch (error) {
        res.status(404).json({
            ststus : "Fail",
            message : error.message
        })
    }

}

exports.viewData = async function(req, res, next){

    try {
        let Data = await DATA.find()
        
        res.status(201).json({
            ststus : "success",
            message : "Data Show Successfully",
            data : Data
        })
    } catch (error) {
        res.status(404).json({
            ststus : "Fail",
            message : error.message
        })
    }

}

exports.viewDataById = async function(req, res, next){

    try {
        let Data = await DATA.findById(req.params.id)
        if(!Data){
            throw new Error("user not found")
        }
        res.status(201).json({
            ststus : "success",
            message : "Data Show Successfully",
            data : Data
        })
    } catch (error) {
        res.status(404).json({
            ststus : "Fail",
            message : error.message
        })
    }

}

exports.deleteData = async function(req, res, next){

    try {
        let Data = await DATA.findByIdAndDelete(req.params.deleteId)
        
        res.status(201).json({
            ststus : "success",
            message : "Data Delete Successfully",
            data : Data
        })
    } catch (error) {
        res.status(404).json({
            ststus : "Fail",
            message : error.message
        })
    }

}

exports.updateData = async function(req, res, next){

    try {
        let Data = await DATA.findByIdAndUpdate(req.params.updateId,req.body)
        let updatedData = await DATA.findById(Data._id)
        
        res.status(201).json({
            ststus : "success",
            message : "Data Update Successfully",
            data : updatedData
        })
    } catch (error) {
        res.status(404).json({
            ststus : "Fail",
            message : error.message
        })
    }

}
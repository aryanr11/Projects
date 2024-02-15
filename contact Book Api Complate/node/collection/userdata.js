const bcrypt = require('bcrypt');
var User = require('../models/user')

var jwt = require('jsonwebtoken');
const { Error } = require('mongoose');


exports.sequrity = async function (req, res ,next){
    try {

        let token = await req.headers.token
        if(!token){
            throw new Error('please send token')
        }
        var decoded = jwt.verify(token, 'sur');
        var userchack = decoded.id
        req.userId = decoded.id
        if(!userchack){
            throw new Error("user not found")
        }
        next()
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.userSignup = async function (req, res, next) {
    
    try {
        
        // req.body.profile = req.file.filename

        if (!req.body.email && !req.body.password && !req.body.username ) {
            throw new Error('enter feilds...!')
        }
        
        req.body.password = await bcrypt.hash(req.body.password, 8)
        
        let data = await User.create(req.body)
        
        res.status(201).json({
            status: "pass",
            message: "user signup sucsessfull",
            data
        })
        
    } catch (error) {
        
        res.status(404).json({
            status: "fail",
            message: error.message
        })
        
    }
    
}

exports.userLogin = async function (req, res, next) {
    
    try {
        
        let userdata = await User.findOne({ email: req.body.email })
        if (!userdata) {
            throw new Error('user not found')
        }
        let pass = await bcrypt.compare(req.body.password, userdata.password)
        if (!pass) {
            throw new Error('password invalid')
        }
        var token = jwt.sign({ id: userdata._id }, 'sur')
        
        res.status(201).json({
            status: "pass",
            message: "user login sucsessfull",
            userdata,
            token
        })

    } catch (error) {

        res.status(404).json({
            status: "fail",
            message: error.message
        })

    }

}

exports.userAlldata = async function (req, res, next) {
    try {
        let dataf = await User.find();
        res.status(201).json({
            status: "pass",
            message: "user data get successful",
            data: dataf
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

exports.userSingledata = async function (req, res, next) {

    try {

        let data = await User.findById(req.params.id)

        res.status(201).json({
            status: "pass",
            message: "admin login sucsessfull",
            data
        })

    } catch (error) {

        res.status(404).json({
            status: "fail",
            message: error.message
        })

    }

}

exports.userDelete = async function (req, res, next) {

    try {

        let data = await User.findByIdAndDelete(req.params.id)
        if (!data) {
            throw new Error('admin not found')
        }
        res.status(201).json({
            status: "pass",
            message: "user delete sucsessfull",
            data
        })

    } catch (error) {

        res.status(404).json({
            status: "fail",
            message: error.message
        })

    }

}

exports.userUpdate = async function (req, res, next) {

    try {

        req.body.password = await bcrypt.hash(req.body.password, 8)

        let data = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(201).json({
            status: "pass",
            message: "user update sucsessfull",
            data
        })

    } catch (error) {

        res.status(404).json({
            status: "fail",
            message: error.message
        })

    }

}
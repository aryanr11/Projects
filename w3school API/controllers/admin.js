var ADMIN = require('../models/admin')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');



// Admin SignUp
exports.adminSignup = async function (req, res, next) {
    try {

        req.body.password = await bcrypt.hash(req.body.password, 8)

        let adminSignup = await ADMIN.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "Admin SignUp Successfully",
            data: adminSignup
        })
    }

    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

// Admin Login
exports.adminLogin = async function (req, res, next) {
    try {

        let adminLogin = await ADMIN.findOne({ email: req.body.email })
        if (!adminLogin) {
            throw new Error('Admin Not Found')
        }

        let passComp = await bcrypt.compare(req.body.password, adminLogin.password)
        if (!passComp) {
            throw new Error('Invalid Password')
        }

        var token = jwt.sign({ id: adminLogin._id }, 'SURAT');

        res.status(201).json({
            status: "Success",
            message: "Admin Login Successfully",
            data: adminLogin,
            token
        })
    }

    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

// Admin Find
exports.adminFind = async function (req, res, next) {
    try {

        let data = await ADMIN.find()

        res.status(201).json({
            status: "Success",
            message: "Admin All Data Get Successfully",
            data
        })
    }

    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

// Admin Delete
exports.adminDelete = async function (req, res, next) {
    try {

        let adminDelete = await ADMIN.findByIdAndDelete(req.params.deleteId)

        res.status(201).json({
            status: "Success",
            message: "Admin Delete Successfully",
            data: adminDelete
        })
    }

    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

// Admin Update
exports.adminUpdate = async function (req, res, next) {
    try {

        let adminUpdate = await ADMIN.findByIdAndUpdate(req.params.updateId, req.body)

        res.status(201).json({
            status: "Success",
            message: "Admin Update Successfully",
            data: adminUpdate
        })
    }

    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}
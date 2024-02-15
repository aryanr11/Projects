var USER = require('../models/user')
const bcrypt = require('bcrypt');

// Sequre
exports.sequre = async function (req, res, next) {
    try {

        let token = req.headers.token
        if(!token){
            throw new Error('Please Send Token')
        }

        var decoded = jwt.verify(token, 'SURAT');

        req.userID = decoded.id

        let UserCheck = await USER.findById(decoded.id)
        if(!UserCheck){
            throw new Error('User Not Found')
        }

        next()
    }

    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

// user SignUp
exports.userSignup = async function (req, res, next) {
    try {

        req.body.password = await bcrypt.hash(req.body.password, 8)

        let userSignup = await USER.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "user SignUp Successfully",
            data: userSignup
        })
    }

    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

// user Login
exports.userLogin = async function (req, res, next) {
    try {

        let userLogin = await USER.findOne({ email: req.body.email })
        if (!userLogin) {
            throw new Error('user Not Found')
        }

        let passComp = await bcrypt.compare(req.body.password, userLogin.password)
        if (!passComp) {
            throw new Error('Invalid Password')
        }

        res.status(201).json({
            status: "Success",
            message: "user Login Successfully",
            data: userLogin
        })
    }

    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

// user Find
exports.userFind = async function (req, res, next) {
    try {

        let data = await USER.find()

        res.status(201).json({
            status: "Success",
            message: "user All Data Get Successfully",
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

// user Delete
exports.userDelete = async function (req, res, next) {
    try {

        let userDelete = await USER.findByIdAndDelete(req.params.deleteId)

        res.status(201).json({
            status: "Success",
            message: "user Delete Successfully",
            data: userDelete
        })
    }

    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

// user Update
exports.userUpdate = async function (req, res, next) {
    try {

        let userUpdate = await USER.findByIdAndUpdate(req.params.updateId, req.body)

        res.status(201).json({
            status: "Success",
            message: "user Update Successfully",
            data: userUpdate
        })
    }

    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}
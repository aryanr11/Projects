var COURSE = require('../models/course')
const bcrypt = require('bcrypt');


// course Create
exports.courseCreate = async function (req, res, next) {
    try {

        req.body.userID = req.userID

        let courseSignup = await COURSE.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "course Create Successfully",
            data: courseSignup
        })
    }

    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

// course Find
exports.courseFind = async function (req, res, next) {
    try {

        let data = await COURSE.find()

        res.status(201).json({
            status: "Success",
            message: "Course Get Successfully",
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

// course Delete
exports.courseDelete = async function (req, res, next) {
    try {

        let courseDelete = await COURSE.findByIdAndDelete(req.params.deleteId)

        res.status(201).json({
            status: "Success",
            message: "course Delete Successfully",
            data: courseDelete
        })
    }

    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

// course Update
exports.courseUpdate = async function (req, res, next) {
    try {

        let courseUpdate = await COURSE.findByIdAndUpdate(req.params.updateId, req.body)

        res.status(201).json({
            status: "Success",
            message: "course Update Successfully",
            data: courseUpdate
        })
    }

    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}
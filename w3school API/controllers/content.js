var CONTENT = require('../models/content')


// content Create
exports.contentCreate = async function (req, res, next) {
    try {

        req.body.userID = req.userID

        let contentSignup = await CONTENT.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "content Create Successfully",
            data: contentSignup
        })
    }

    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

// content Find
exports.contentFind = async function (req, res, next) {
    try {

        let data = await CONTENT.find()

        res.status(201).json({
            status: "Success",
            message: "content Get Successfully",
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

// content Delete
exports.contentDelete = async function (req, res, next) {
    try {

        let contentDelete = await CONTENT.findByIdAndDelete(req.params.deleteId)

        res.status(201).json({
            status: "Success",
            message: "content Delete Successfully",
            data: contentDelete
        })
    }

    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

// content Update
exports.contentUpdate = async function (req, res, next) {
    try {

        let contentUpdate = await CONTENT.findByIdAndUpdate(req.params.updateId, req.body)

        res.status(201).json({
            status: "Success",
            message: "content Update Successfully",
            data: contentUpdate
        })
    }

    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}
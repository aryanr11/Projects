var Contact = require('../models/contact');
const { populate } = require('../models/admin');
var jwt = require('jsonwebtoken');


exports.contactCreate = async function (req, res, next) {
    try {
        req.body.userId = req.userId
        let data = await Contact.create(req.body)
        res.status(201).json({
            status: "pass",
            message: "contact create sucsessfull",
            data
        })

    } catch (error) {

        res.status(404).json({
            status: "fail",
            message: error.message
        })

    }

}

exports.contactAlldata = async function (req, res, next) {

    try {

        let token = req.headers.token
        var decoded = jwt.verify(token, 'sur');
        var userchack = decoded.id
        console.log(userchack);

        let data = await Contact.find({userId: userchack})
        res.status(201).json({
            status: "pass",
            message: "contact data get succsessfull",
            data
        })

    } catch (error) {

        res.status(404).json({
            status: "fail",
            message: error.message
        })

    }

}

exports.contactData = async function (req, res, next) {

    try {

        // let data = await Contact.find().populate('userId')
        let data = await Contact.findById(req.params.id)
        res.status(201).json({
            status: "pass",
            message: "contact data get succsessfull",
            data
        })

    } catch (error) {

        res.status(404).json({
            status: "fail",
            message: error.message
        })

    }

}

exports.contactDelete = async function (req, res, next) {

    try {

        let data = await Contact.findByIdAndDelete(req.params.id)
        if (!data) {
            throw new Error('contact not found')
        }
        res.status(201).json({
            status: "pass",
            message: "contact delete sucsessfull",
            data
        })

    } catch (error) {

        res.status(404).json({
            status: "fail",
            message: error.message
        })

    }

}

exports.contactUpdate = async function (req, res, next) {

    try {

        let data = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!data) {
            throw new Error('contact not found')
        }
        res.status(201).json({
            status: "pass",
            message: "contact update sucsessfull",
            data
        })

    } catch (error) {

        res.status(404).json({
            status: "fail",
            message: error.message
        })

    }

}
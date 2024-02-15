var express = require('express');
const bcrypt = require('bcrypt');
var Admin = require('../models/admin')


exports.adminSignup = async function (req, res, next) {

    try {

        if (!req.body.email && req.body.password) {
            throw new Error('enter feilds...!')
        }

        req.body.password = await bcrypt.hash(req.body.password, 8)

        let data = await Admin.create(req.body)

        res.status(201).json({
            status: "pass",
            message: "admin signup sucsessfull",
            data
        })

    } catch (error) {

        res.status(404).json({
            status: "fail",
            message: error.message
        })

    }

}

exports.adminLogin = async function (req, res, next) {

    try {

        let admindata = await Admin.findOne({ email: req.body.email })
        if (!admindata) {
            throw new Error('admin not found')
        }
        let pass = await bcrypt.compare(req.body.password, admindata.password)
        if (!pass) {
            throw new Error('password invalid')
        }

        res.status(201).json({
            status: "pass",
            message: "admin login sucsessfull",
            admindata
        })

    } catch (error) {

        res.status(404).json({
            status: "fail",
            message: error.message
        })

    }

}


exports.adminAlldata = async function (req, res, next) {

    try {

        let data = await Admin.find()
        console.log(data);
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

exports.adminSingledata = async function (req, res, next) {

    try {

        let data = await Admin.findById(req.params.id)

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

exports.adminDelete = async function (req, res, next) {

    try {

        let data = await Admin.findByIdAndDelete(req.params.id)
        if (!data) {
            throw new Error('admin not found')
        }
        res.status(201).json({
            status: "pass",
            message: "admin delete sucsessfull",
            data
        })

    } catch (error) {

        res.status(404).json({
            status: "fail",
            message: error.message
        })

    }

}

exports.adminUpdate = async function (req, res, next) {

    try {

        req.body.password = await bcrypt.hash(req.body.password, 8)

        let data = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(201).json({
            status: "pass",
            message: "admin update sucsessfull",
            data
        })

    } catch (error) {

        res.status(404).json({
            status: "fail",
            message: error.message
        })

    }

}
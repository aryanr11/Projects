var TEMPID = require('../utilities/tempid.model')
var jwt = require('jsonwebtoken');
const deleteUserFromAllCollections = require('./DeleteFromAllCollection');


exports.secure = async function (req, res, next) {
    try {
        let token = req.headers.token
        if (!token) {
            throw new Error('Please Send Token')
        }

        jwt.verify(token, 'cdmi', async (error, decode) => {

            if (error) {
                if (error.name === 'TokenExpiredError') {
                    
                    let decodeId = jwt.decode(token, 'cdmi', { varify: false })

                    await deleteUserFromAllCollections(decodeId.id)
                    return res.status(404).json({
                        status: "Token Was Expired",
                        message: "Please Create New Token"
                    })
                }
                return res.status(404).json({
                    status: "Token Was Invalid",
                    message: "Please Enter Right Token"
                })
            }

            req.tempId = decode.id
            let checkId = await TEMPID.findOne({ tempId: decode.id })
            if (!checkId) {
                return res.status(404).json({
                    status: "Token Was Expire",
                    message: "Please Create New Token"
                })
            }
            next()
        });

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.getData = async function (req, res, next) {

    try {
        Data = await TEMPID.find()
        res.status(201).json({
            status: "Success",
            message: "All Temporary Data",
            data: Data
        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}


exports.create = async function (req, res, next) {

    try {
        let uniqueId = new Date() + Math.round(Math.random() * 1E9);
        var token = jwt.sign({ id: uniqueId }, 'cdmi', { expiresIn: 60 *60});
        let Data = await TEMPID.create({ tempId: uniqueId })
        res.status(201).json({
            status: "Success",
            message: "Temporary Id Create",
            data: Data,
            token
        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}
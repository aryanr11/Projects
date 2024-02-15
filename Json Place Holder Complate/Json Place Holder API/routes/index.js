var express = require('express');
var router = express.Router();

var Controller = require('../controllers/data.js')

// Data

router.get('/', Controller.viewData);

router.get('/:id', Controller.viewDataById);

router.post('/', Controller.createData);

router.delete('/:deleteId', Controller.deleteData);

router.put('/:updateId', Controller.updateData);


module.exports = router;

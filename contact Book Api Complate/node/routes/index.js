var express = require('express');
var router = express.Router();
var admindata = require('../collection/admindata')


/* api admin page. */

router.post('/signup',admindata.adminSignup)

router.post('/login', admindata.adminLogin)

router.get('/', admindata.adminAlldata)

router.get('/:id', admindata.adminSingledata)

router.delete('/:id',admindata.adminDelete)

router.put('/:id', admindata.adminUpdate)





module.exports = router;

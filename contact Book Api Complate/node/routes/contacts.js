var express = require('express');
var router = express.Router();
var contactdata = require('../collection/contact')
var userdata = require('../collection/userdata')

/*contact */

router.post('/create',userdata.sequrity,contactdata.contactCreate)

router.get('/alldata',  userdata.sequrity, contactdata.contactAlldata)

router.get('/data/:id', userdata.sequrity,contactdata.contactData)

router.delete('/delete/:id', userdata.sequrity,contactdata.contactDelete)

router.put('/update/:id', userdata.sequrity,contactdata.contactUpdate)



module.exports = router;

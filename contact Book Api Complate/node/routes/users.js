var express = require('express');
var router = express.Router();
var userdata = require('../collection/userdata')

// const multer  = require('multer')

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './public/images')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
//     }
//   })
//   upload.single('profile'),
  
//   const upload = multer({ storage: storage })
/* user contact */

router.post('/signup', userdata.userSignup)

router.post('/login', userdata.userLogin)

router.get('/alldata', userdata.sequrity,userdata.userAlldata)

router.get('/data/:id', userdata.userSingledata)

router.delete('/delete/:id', userdata.userDelete)

router.put('/update/:id', userdata.userUpdate)

module.exports = router;

var express = require('express');
var router = express.Router();

var adminController = require('../controllers/admin')
var userController = require('../controllers/user')
var courseController = require('../controllers/course')
var contentController = require('../controllers/content')


router.post('/admin/signup', adminController.adminSignup);

router.post('/admin/login', adminController.adminLogin);

router.get('/admin/find', adminController.adminFind);

router.delete('/admin/delete/:deleteId', adminController.adminDelete);

router.put('/admin/update/:updateId', adminController.adminUpdate);



router.post('/user/signup', userController.userSignup);

router.post('/user/login', userController.userLogin);

router.get('/user/find', userController.sequre , userController.userFind);

router.delete('/user/delete/:deleteId', userController.userDelete);

router.put('/user/update/:updateId', userController.userUpdate);



router.post('/course/create', userController.sequre , courseController.courseCreate);

router.get('/course/find', courseController.courseFind);

router.delete('/course/delete/:deleteId', courseController.courseDelete);

router.put('/course/update/:updateId', courseController.courseUpdate);



router.post('/content/create', userController.sequre , contentController.contentCreate);

router.get('/content/find', contentController.contentFind);

router.delete('/content/delete/:deleteId', contentController.contentDelete);

router.put('/content/update/:updateId', contentController.contentUpdate);



module.exports = router;
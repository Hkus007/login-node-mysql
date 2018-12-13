const express = require('express');
const router = express.Router();
const path = require('path');

// *********************** routes user API **********************************//
var userObj = require('../controllers/user.js');
router.post('/user',userObj.addUser);   
router.get('/user', userObj.getUser);

var enquiryObj = require('../controllers/enquiry.js');
router.post('/enquiry',enquiryObj.addEnquiry);



module.exports = router;
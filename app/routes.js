const path = require('path');
const jwt = require('jsonwebtoken');
const constants = require('../lib/constants.js');
const port = 3000;;
const min = '';
const version = 1.02;

module.exports =  (app) => {
    app.get('/',(req,res)=>{
        const data = {};
        data.min = min;
        data.ver = version;
        data.spath = req.protocol + '://' + req.hostname + ':' + port + '/';
        data.contrl = 'homePage';
        res.render("home.html", { dt: data });
    })
};

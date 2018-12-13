const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const flash = require('connect-flash');
const path = require('path');
const morgan = require('morgan'); 
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const http = require('http');
const nodemailer = require('nodemailer');
const logger = require('./logging/logger.js');
const server = '';
const url = require('url');
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
const dir = path.join(__dirname, 'uploads');
app.set('views', __dirname + '/public/views');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/'));
app.engine('html', require('ejs').renderFile);
app.use(express.static(dir));
http.createServer(app).listen(port);
app.use('/', require('./routes/index.js'));
require('./app/routes.js')(app); // load our routes and pass in our app and fully configured passport

console.log('Server is running on 1 :' + port);


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");
var flash = require("connect-flash");
var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use(require("express-session")({
    secret: "Landscaping is an art, not a job.",
    resave: false,
    saveUninitialized: false
}));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(flash());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use(function(req, res, next) {
  req.app.locals.error = req.flash("error");
  req.app.locals.success = req.flash("success");
  next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Your Landscaping Website Is Online!");
});

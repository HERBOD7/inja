var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);


var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'sakila'
});

connection.connect();

app.get('/', (req, res, next) => {
   res.render("actor");
});

app.get('/actors/:letter', (req, res, next) => {
    var w = new Date().getTime();
    while (w + 2000 > new Date().getTime()){
        //
    }
    connection.query('SELECT * FROM actor WHERE last_name LIKE ?', [req.params.letter+"%"], function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});


app.get('/actor-info/:id', (req, res, next) => {
    connection.query('SELECT film_info FROM actor_info WHERE actor_id = ?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.json(results[0]);
    });
});











// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

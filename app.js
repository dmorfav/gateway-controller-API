const createError = require('http-errors');
const express = require('express');
const cors = require('cors')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const { useTreblle } = require("treblle");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const gatewayRouter = require('./routes/gateway');
const peripheralRouter = require('./routes/peripheral');
require('dotenv').config();

const app = express();
app.use(cors())

useTreblle(app, {
  apiKey: "T7522loOP9HNuuIg3HQQpkIEolWCiOEL",
  projectId: "BoHb5Pw2htI317xo",
  showErrors: true
});

// Configure bodyparser to handle post requests
app.use(bodyParser.raw({inflate:true, limit: '100kb', type: 'application/json'}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/GatewayController", {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/gateway', gatewayRouter);
app.use('/peripheral', peripheralRouter);

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

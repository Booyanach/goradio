var express = require('express'),
    session = require('express-session'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    // api modules
    radio = require('./modules/api/radio'),
    user = require('./modules/api/user'),
    error = require('./modules/api/error'),
    // generic modules
    auth = require('./modules/auth'),
    app = express();

mongoose.connect('mongodb://localhost:27017/goradio');

app.use(express.static(__dirname + '/www', '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({secret: 'thisthingisawesomelyawesome'}));
app.use(passport.initialize());
app.use(passport.session());

// Session-persisted message middleware
app.use(function(req, res, next){
  var err = req.session.error,
      msg = req.session.notice,
      success = req.session.success;

  delete req.session.error;
  delete req.session.success;
  delete req.session.notice;

  if (err) res.locals.error = err;
  if (msg) res.locals.notice = msg;
  if (success) res.locals.success = success;

  next();
});

app.route('/radios')
    .get(auth.isAuthenticated, radio.list)
    .post(auth.isAuthenticated, radio.add);

app.route('/radio/:radio_id')
    .get(auth.isAuthenticated, radio.fetch);
    //.post(radio.update);

app.route('/users')
    .get(auth.isAuthenticated, user.list)
    .post(user.add);

app.route('/user/:user_id')
    .get(auth.isAuthenticated, user.get);

app.route('/success')
    .get(user.success);

app.route('/error')
    .get(error.message);

app.route('/login')
    .post(auth.login);

app.listen(8090);

console.log('listening in on 8090');
var passport = require('passport'),
    BasicStrategy = require('passport-http').BasicStrategy,
    User = require('./models/user');

passport.use(new BasicStrategy(
  function(username, password, callback) {
    User.findOne({ name: username }, '+password', function (err, user) {
      if (err) return callback(err);

      // No user found with that username
      if (!user) return callback(null, false);

      // Make sure the password is correct
      user.verifyPassword(password, function(err, isMatch) {
        if (err) return callback(err);

        // Password did not match
        if (!isMatch) return callback(null, false);

        // Success
          loggedUser = user;
        return callback(null, user);
      });
    });
  }
));

exports.isAuthenticated = passport.authenticate('basic', { session: false });
exports.login = function (req, res, next) {
    passport.authenticate('basic', function (err, user) {
        User.findById(user._id, function (err, user) {
            res.json(user);
        });
    })(req, res, next);
};

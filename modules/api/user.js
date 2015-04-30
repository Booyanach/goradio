var User = require('../models/user'),
    handler = require('../handler');

exports.add = function (req, res) {
    var user = new User({
        name: req.body.username,
        password: req.body.password,
        bio: req.body.bio
    });

    user.save(function (err) {
        if (err) res.json(handler.onerror('error creating user.', err));
        else res.json(handler.onreturn(user));
    });
};

exports.list = function (req, res) {
    User.find(function (err, users) {
        if (err) res.json(handler.onerror('failed to list users!', err));
        else res.json(handler.onreturn(users));
    });
};

exports.get = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err) res.json(handler.onerror('failed to find user!', err));
        else res.json(handler.onreturn(user));
    });
};

exports.success = function (req, res) {
    User.find({name: req.params.name}, function (err, user) {
        if (err) res.json(handler.onerror('failed to find user!', err));
        else res.json(handler.onreturn(user));
    });
};

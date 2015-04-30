var Radio = require('../models/radio'),
    handler = require('../handler');

exports.list = function (req, res) {
    Radio.find(function (err, radios) {
        if (err) res.json(handler.onerror('unable to list radios', err));
        res.json(handler.onreturn(radios));
    });
};

exports.add = function (req, res) {
    var radio = new Radio({
        name: req.body.name,
        type: req.body.type,
        owner: req.body.owner,
        blob: req.body.blob,
        songs: req.body.songs,
        description: req.body.description
    });

    radio.save(function (err) {
        if (err) res.json(handler.onerror('Unable to save radio', err));
        res.json(handler.onok('New radio "' + req.body.name + '" created!'));
    });
};

exports.fetch = function (req, res) {
    Radio.findById(req.params.radio_id, function (err, radio) {
        if (err) res.json(handler.onerror('unable to fetch radio', err));
        res.json(handler.onreturn(radio));
    });
};
var handler = require('../handler');

exports.message = function (req, res) {
    res.json(handler.onerror('Unknown Error!', {'Error': 404}));
};
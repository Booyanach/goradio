var mongoose = require('mongoose'),
    RadioSchema = mongoose.Schema({
   blob: {
       type: Array,
       default: [],
       required: true
    },
    description: {
        type: String,
        required: false,
        default: ""
    },
    name: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    songs: {
        type: Array,
        default: []
    },
    type: {
        type: String,
        default: 'Miscellaneous'
    }
});

module.exports = mongoose.model('Radio', RadioSchema);
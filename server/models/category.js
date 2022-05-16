const mongooose = require('mongoose');

const categorySchema = new mongooose.Schema({
    name: {
        type: String,
        required: 'This field is required.'
    },
      image: {
        type: String,
        required: 'This field is required.'
    },
});

module.exports = mongooose.model('Category', categorySchema);
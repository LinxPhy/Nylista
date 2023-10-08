const mongoose = require('mongoose');

const TopicsSchema = new mongoose.Schema({

    topic: {
        type: [String],
        required: [true, 'Please select a topic'],
        default: ['main'],
        maxlength: 10,
    }

});

const Topics = mongoose.model('Topics', TopicsSchema, 'Topics');
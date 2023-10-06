const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        minlength: [1, 'Title cannot be empty'],
        maxlength: [60, 'Title cannot be more than 60 characters'],
    },

    content: {
        type: String,
        required: true,
        minlength: [1, 'Content cannot be empty'],
        maxlength: [3000, 'Content cannot be more than 3000 characters'],
    },

    tags: {
        type: [String],
        required: false,
        maxlength: [5, 'Tags cannot be more than 5'],
    },

    topic: {
        type: [String],
        required: false,
    },

    priority: {
        type: String,
        required: true,
        enum: [ 'none', 'low', 'medium', 'high'],
    },

    dueDate: {
        type: Date,
        required: false,
        validate: {
            validator: function (value) {
                return value > Date.now();
            },
            message: 'Due date must be in the future',
        },
    },

    status: {
        type: String,
        required: true,
        enum: ['open', 'in-progress', 'cancelled', 'completed', 'closed'],
    },

    created: {
        type: Date,
        default: Date.now,
    },

    updated: {
        type: Date,
        default: Date.now,
    },


});

module.exports = mongoose.model('Post', PostSchema, 'Posts');
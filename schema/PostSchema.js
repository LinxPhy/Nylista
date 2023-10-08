const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [1, 'Title cannot be empty'],
        maxlength: [60, 'Title cannot be more than 60 characters'],
    },

    content: {
        type: String,
        required: [true, 'Content is required'],
        minlength: [1, 'Content cannot be empty'],
        maxlength: [3000, 'Content cannot be more than 3000 characters'],
    },

    tags: {
        type: [String],
        required: false,
        maxlength: [5, 'Tags cannot be more than 5'],
    },

    topic: {
        type: String,
        required: [true, 'Please select a topic'],
    },

    priority: {
        type: String,
        required: false,
        enum: [ 'none', 'low', 'medium', 'high'],
    },

    dueDate: {
        type: Date,
        required: false,
        validate: {
            validator: function (value) {
                if (!value) {
                    return true;
                }
                return value > Date.now();
            },
            message: 'Due date must be in the future',
        },
    },

    status: {
        type: String,
        required: false,
        enum: ['none', 'active', 'in-progress', 'pending', 'cancelled', 'completed', 'closed'],
        // remove new
        // cancelled = x
        // completed = check green
        // closed = check red
    },

    favourites: {
        type: Boolean,
        required: false,
        default: false,
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
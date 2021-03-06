const mongoose = require('../database/connection');

mongoose.set('useCreateIndex', true);

const TodoSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: {}
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
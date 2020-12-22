const Todo = require('../models/Todo');

module.exports = {

    async index(req, res) {
        try {
            const response = await Todo.find();
            return res.send(response);
        } catch (err) {
            console.error(err);
            return res.send(err.message);
        }
    },

    async create(req, res) {
        try {
            await Todo.create(req.body);
            return res.send('Created successfully');
        } catch (err) {
            console.error(err);
            return res.send(err.message);
        }
    },

    async show(req, res) {
        try {
            const id = req.params.id;
            const response = await Todo.findOne({ _id: id });
            return res.send(response);
        } catch (err) {
            console.error(err);
            return res.send(err.message);
        }
    },

    async update(req, res) {
        try {
            const id = req.params.id;
            await Todo.findOneAndUpdate({ _id: id }, req.body);
            return res.send('Updated successfully');
        } catch (err) {
            console.error(err);
            return res.send(err.message);
        }
    },

    async delete(req, res) {
        try {
            const id = req.params.id;
            await Todo.findOneAndDelete({ _id: id });
            return res.send('Deleted successfully');
        } catch (err) {
            console.error(err);
            return res.send(err.message);
        }
    },
};
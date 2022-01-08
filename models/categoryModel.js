const mongoose = require('mongoose');
const validator = require('validator');

const categoryModel = new mongoose.Schema({
    catName: String,
});

const category = mongoose.model('category', categoryModel);

module.exports = category
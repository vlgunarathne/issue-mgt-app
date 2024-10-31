const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    status: String
});

module.exports = mongoose.model('Issue', issueSchema);

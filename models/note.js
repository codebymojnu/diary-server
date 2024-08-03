// models/note.js
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    text: { type: String, required: true },
    writtenBy: { type: String, required: true },
});

module.exports = mongoose.model('Note', noteSchema);

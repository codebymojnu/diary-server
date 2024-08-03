// controllers/noteController.js
const Note = require('../models/note');

// Save a new note
exports.createNote = async (req, res) => {
    const { date, text, writtenBy } = req.body;

    try {
        const newNote = new Note({
            date,
            text,
            writtenBy,
        });

        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all notes
exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a note
exports.updateNote = async (req, res) => {
    const { id } = req.params;
    const { date, text, writtenBy } = req.body;

    try {
        const updatedNote = await Note.findByIdAndUpdate(
            id,
            { date, text, writtenBy },
            { new: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }

        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a note
exports.deleteNote = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedNote = await Note.findByIdAndDelete(id);

        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }

        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

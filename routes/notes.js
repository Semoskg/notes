const express = require('express');
const router = express.Router();

//comment: This is a simple in-memory store for notes.
let notes = [
    { id: 1, title: "First Note", content: "This is my first note" },
    { id: 2, title: "Second Note", content: "This is my second note" }
];

router.get('/', (req, res) => {
    res.json(notes);
});

router.get('/:id', (req, res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
});
// Create a new note
router.post('/', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: "Title and content required" });
    }
    const newNote = {
        id: notes.length + 1,
        title,
        content
    };
    notes.push(newNote);
    res.status(201).json(newNote);
});
// Update an existing note
router.put('/:id', (req, res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if (!note) return res.status(404).json({ message: "Note not found" });

    const { title, content } = req.body;
    if (title) note.title = title;
    if (content) note.content = content;

    res.json(note);
});
// Delete a note
router.delete('/:id', (req, res) => {
    notes = notes.filter(n => n.id !== parseInt(req.params.id));
    res.json({ message: "Note deleted" });
    res.json(notes);
});

module.exports = router;
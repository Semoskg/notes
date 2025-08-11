const express = require('express');
const notesRoutes = require('./routes/notes');
const app = express();

app.use(express.json()); // <<< This is important!

app.use('/api/notes', notesRoutes);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
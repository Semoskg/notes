require('dotenv').config();
const express = require('express');
const notesRoutes = require('./routes/notes');
const app = express();

app.use(express.json());

app.use('/api/notes', notesRoutes);

app.listen(process.env.PORT, () => {
    console.log('Server started on port 3000');
});
// ato aman
const express = require('express');
const notesRoutes = require('./routes/notes');
const app = express();

app.use(express.json()); 

app.use('/api/notes', notesRoutes);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
//u are semos
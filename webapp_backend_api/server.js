const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})


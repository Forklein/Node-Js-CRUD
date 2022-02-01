const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(`I'm Here`);
})

app.listen(3000, () => { console.log(`Server is running on http://localhost:${PORT}`) });
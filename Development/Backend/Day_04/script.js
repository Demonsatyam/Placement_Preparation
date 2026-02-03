const express = require('express');
const app = express();

// routes
app.get('/', (req, res) => {
    res.send("Welcome to ExpressJs Server");
});

app.get('/profile', (req, res) => {
    res.send("Server rendered to profile route");
});

app.listen(3000);
const express = require('express');
const app = express();

// app middleware
// app.use((req, res, next) => {
//     console.log("middleware called");
//     next();
// });

// routes
app.get("/", (req, res, next) => {
    res.send('Welcome to ExpressJs Server');
});

app.get("/profile", (req, res, next) => {
    return next(new Error('Something went wrong in profile route'));
    res.send('Welcome to Profile Page');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000);

// Middleware -> function performed between request and response

// Request and response handling
// Frontend - Backend - Frontend
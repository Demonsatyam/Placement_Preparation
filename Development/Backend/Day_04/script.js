const express = require('express');
const app = express();

// app middleware
app.use((req, res, next) => {
    console.log("middleware called hua hai");
    next();
});

// for json based data
app.use(express.json());

// x-www-form-urlencoded -> form data
app.use(express.urlencoded({ extended: true }));

routes
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

// FORM HANDLING and WORKING with the FORMS
// Handle backend process of forms and making sure the data coming from anu frontend lib, fw, templating engines
// we still handle it at the backend

// Install cookie-parser
// cookie -> saving data at frontend and sending it to backend whenever a request is made
// Hum log kuch bhi data frontend pe rkh skte hein and jb bhi aap kuch request backend pr kroge woh frontend pr saved data automatically backend pr chala jayega
// Session -> store data at backend and whenever a request is made from frontend to backend, we identify the user using some unique id (cookie) and then fetch the data from backend using that id
// Session basically stores the communication from LogIn to Logout


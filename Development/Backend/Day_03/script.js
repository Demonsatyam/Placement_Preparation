// module - installed with core nodejs
// packages - installed with npm

// Role of NPM -> installing, uninstalling, managing packages

// dependencies -> packages and packages ki dependencies

// devdependencies -> packages required only during development

// Ques: Kai baar ap koi script chalate ho and us script mein aap likhte ho yeh command
// npm start
// npm run dev
// npm run concurrent

// console.log("Hello World");

// expressJs -> ek npm package hai, yeh ek framework hai
// framework -> provides a flow, but you can ad your individiality
// manages everything from receiving the request and giving the response



// library -> provides you tools and functionality, you have to decide the flow

// Setting up a basic express server
// Routing
// Middleware -> task performed before routes (between receiving request and sending response)
// jab bhi server request accept krta hai waha se route ke beech pahuchne tak agar aap us request
// ko beech mein rokte ho and kuchh perform karte ho, to ye element middleware kehlata hai

const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World from ExpressJs");
});

app.get('/profile', (req, res) => {
    res.send("we are rendered to profile page");
});

app.listen(3000);



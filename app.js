const http = require('http'); //Import http module

const express = require('express');

const routes = require('./routes'); //This imports my requestHandler function (funcitons are objects in JS)
const send = require('send');

const app = express();

app.use((req,res,next)=>{
    console.log("First middleware");
    next();
});

app.use((req,res,next)=>{
    console.log("second middleware");
    res.send('<h1>Welcome welcome</h1>');
    next();
});

//Creating a server
//Using arrow functions
const server = http.createServer(app);  //Our server is now created and when a request is recieved, it executes the requestListener function.
//However, there is no way we can send it a request, because it is not listening.

server.listen(3000); //In order to send it a request, it must be listening to a Port (3000 in this case)
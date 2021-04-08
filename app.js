const http = require('http'); //Import http module

//Creating a server
//Using arrow functions
const server = http.createServer((req,res)=>{
    console.log('Hello from the server');
});  //Our server is now created and when a request is recieved, it executes the requestListener function.
//However, there is no way we can send it a request, because it is not listening.

server.listen(3000); //In order to send it a request, it must be listening to a Port (3000 in this case)
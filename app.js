const http = require('http'); //Import http module
const fs = require('fs');

//Creating a server
//Using arrow functions
const server = http.createServer((req,res)=>{
    console.log('Hello from the server. You are in the main page');
    //console.log(req.url, req.method, req.headers);
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first web page</title></head>');
        res.write('<body>');
        res.write('</body>');
        res.write('<h1>Welcome to the main page</h1>');
        res.write('<form action="/message" method="POST"> <input type="text" name=myMessage> <button> Send </button></form>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);

        });
        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err)=>{
                console.log(message);
                res.statusCode = 302;
                res.setHeader('Location','/'); 
                return res.end();
            });
        });
        //fs.writeFileSync('message.txt', 'Dummy text to be inserted into file');
    }
    //This is the hard way to write the content. In the following lectures, this will be easelly done with Express
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first web page</title></head>');
    res.write('<body><h1>Hello from the web page</h1></body>');
    res.write('</html>');  
    res.end();
});  //Our server is now created and when a request is recieved, it executes the requestListener function.
//However, there is no way we can send it a request, because it is not listening.

server.listen(3000); //In order to send it a request, it must be listening to a Port (3000 in this case)
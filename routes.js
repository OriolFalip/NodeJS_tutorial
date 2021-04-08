const fs = require('fs');

const requestHandler = (req,res) => {
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
}

module.exports = requestHandler;
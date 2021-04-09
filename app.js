const http = require('http'); //Import http module

const express = require('express');
const app = express();




app.post('/products',(req,res,next)=>{
    console.log((res.body));
    res.redirect('/');
});

app.use('/add-product',(req,res,next)=>{
    res.send('<h1>Add new product</h1><form action="/products" method="POST"><input type="text" name="products"><button type="submit">Send</button></input></form>');
});

app.use('/',(req,res,next)=>{
    res.send('<h1>Welcome to my shop</h1>');    
});

//Express create server and listen:
app.listen(3001);
const express = require('express');
const router = express.Router();

router.use('/add-product',(req,res,next)=>{
    res.send('<h1>Add new product</h1><form action="/admin/products" method="POST"><input type="text" name="products"><button type="submit">Send</button></input></form>');
});

router.post('/products',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
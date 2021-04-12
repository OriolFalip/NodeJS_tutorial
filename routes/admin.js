const express = require('express');
const router = express.Router();

const path = require('path');

const rootDir = require('../util/path.js');

router.get('/add-product',(req,res,next)=>{
    console.log(__dirname);
    console.log(path.join(rootDir,'views','add-product.html'));
    res.sendFile(path.join(rootDir,'views','add-product.html'));    
});

router.post('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));    
});

router.post('/products',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
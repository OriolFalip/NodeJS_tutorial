const express = require('express');
const router = express.Router();

const path = require('path');

const rootDir = require('../util/path.js');

const products = [];


router.get('/add-product',(req,res,next)=>{
    //res.sendFile(path.join(rootDir,'views','add-product.html'));    
    res.render('add-product.pug', {docTitle: 'Add Product', path: '/admin/add-product'});
});

router.post('/add-product',(req,res,next)=>{
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
    res.render('add-product.pug',{docTitle: 'Add Product'});
});

router.post('/products',(req,res,next)=>{
    console.log(req.body.imageUrl);
    products.push(req.body);
    res.redirect('/');
});

exports.router = router;
exports.products = products;
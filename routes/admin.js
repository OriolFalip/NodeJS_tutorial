const express = require('express');
const router = express.Router();

const path = require('path');

const rootDir = require('../util/path.js');

const products = [];


router.get('/add-product',(req,res,next)=>{
    //res.sendFile(path.join(rootDir,'views','add-product.html'));    
    res.render('add-product', {docTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true});
});

router.post('/add-product',(req,res,next)=>{
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
    res.render('add-product',{docTitle: 'Add Product'});
});

router.post('/products',(req,res,next)=>{
    console.log(req.body.imageUrl);
    products.push(req.body);
    res.redirect('/');
});

exports.router = router;
exports.products = products;
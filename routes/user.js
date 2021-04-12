const express = require('express');
const router = express.Router();

const path = require('path');

const rootDir = require('../util/path.js');

const adminData = require("./admin");
const products = adminData.products;
router.get('/',(req,res,next)=>{
    //console.log(adminData.products);
    //res.sendFile(path.join(rootDir,'views','shop.html'));    
    res.render('shop', {prods: products, docTitle: 'Shop'});
});


//Catch all 404 error page
router.use('/',(req,res,next)=>{
    res.status(404);
    res.sendFile(path.join(rootDir,'views','page404.html'));
    
});
module.exports = router;
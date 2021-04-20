const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop.js');
const errorController = require('../controllers/error');
const adminData = require("./admin");

router.get('/', shopController.getProducts);




router.get('/cart', (req,res,next)=>{
    res.render('shop/cart',{docTitle: 'Cart', activeCart: true})
});

router.get('/orders', (req,res,next)=>{
    res.render('shop/orders',{docTitle: 'Orders', activeOrders: true})
});

router.get('/products', (req,res,next)=>{
    res.render('shop/product-list',{docTitle: 'Products', activeProducts: true})
});

//Catch all 404 error page
router.use('/', errorController.get404);
module.exports = router;
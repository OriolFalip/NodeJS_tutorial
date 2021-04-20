const Product = require('../models/product.js');

exports.getProducts = (req,res,next)=>{
    //console.log(adminData.products);
    //res.sendFile(path.join(rootDir,'views','shop.html')); 
    const products = Product.fetchAll(products =>{
        res.render('shop/product-list', {
            prods: products,
            docTitle: 'Shop',
            path: '/',
            hasProducts: products.length>0,
            activeShop: true,
            productCSS: true});
    });   
};

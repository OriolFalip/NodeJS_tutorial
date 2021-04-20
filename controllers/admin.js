const Product = require('../models/product.js');

exports.getAddProduct = (req,res,next)=>{
    //res.sendFile(path.join(rootDir,'views','add-product.html'));    
    res.render('admin/add-product', {
            docTitle: 'Add Product',
            path: '/admin/add-product', 
            formsCSS: true, 
            productCSS: true, 
            activeAddProduct: true
        });
};

exports.postAddProduct = (req,res,next)=>{
    console.log(req.body.imageUrl);
    const product = new Product(req.body.title, req.body.imageURL, req.body.description, req.body.price);
    product.save();
    //products.push(req.body);
    res.redirect('/');
};


exports.getAdminProducts = (req,res,next)=>{
    //console.log(adminData.products);
    //res.sendFile(path.join(rootDir,'views','shop.html')); 
    const products = Product.fetchAll(products =>{
        res.render('admin/products', {
            prods: products,
            docTitle: 'Products Admin',
            path: '/admin/products',
            hasProducts: products.length>0,
            activeAdminProducts: true,
            productCSS: true});
    });   
};
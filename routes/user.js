const express = require('express');
const router = express.Router();

router.use('/shop', (req,res,next) =>{
    res.send('<h1>Welcome to the shop</h1>')
});

router.get('/',(req,res,next)=>{
    res.send('<h1>Welcome to the shop</h1>');    
});


//Catch all 404 error page
router.use('/',(req,res,next)=>{
    res.status(404);
    res.send('<h1>Error 404: page not found</h1>');    
});
module.exports = router;
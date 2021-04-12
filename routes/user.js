const express = require('express');
const router = express.Router();

const path = require('path');

const rootDir = require('../util/path.js');

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));    
});


//Catch all 404 error page
router.use('/',(req,res,next)=>{
    res.status(404);
    res.sendFile(path.join(rootDir,'views','page404.html'));    
});
module.exports = router;
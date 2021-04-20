exports.get404 = (req,res,next)=>{
    res.status(404);
    res.render('page404', {docTitle: '404: Page not found'});
};
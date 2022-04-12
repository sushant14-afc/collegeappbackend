
exports.botValidation =(req,res,next) =>{
    req.check('name','Bot name is required').notEmpty()
    req.check('type','type is required').notEmpty()
    req.check('description','description is required').notEmpty()
    
    const errors = req.validationErrors()

    if(errors){
        const showError = errors.map(err => err.msg)[0]
        return res.status(400).json({error: showError})
    }
    next()
}
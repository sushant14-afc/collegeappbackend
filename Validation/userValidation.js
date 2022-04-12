
exports.userValidation = (req,res,next) => {
    req.check('first_name','First Name is required').notEmpty()
    req.check('last_name','Last Name is required').notEmpty()
    req.check('date_of_birth','date of birth is required').notEmpty()
    req.check('gender','Gender is required').notEmpty()
    req.check('email','Email is required').notEmpty()
    .isEmail()
    .withMessage('Email format invalid')
    req.check('password','Password is required').notEmpty()
    .isLength(
        {min:8, max:30}
    )
    .withMessage('Password must be between 8 and 30 characters')
    const errors = req.validationErrors()

    if(errors){
        const showError = errors.map(err => err.msg)[0]
        return res.status(400).json({error: showError})
    }
    next()
}

import Joi from "joi";
export const userMiddleware = (req,res,next) => {
    const createUsersxema = Joi.object({
        username: Joi.string().alphanum().min(3).max(20).required(),
        age: Joi.number().integer().min(1).max(30).required(),
        password: Joi.string().min(6).max(20).required()
    })

    let {error} = createUsersxema.validate(req.body)

    if (error) {
        return res.status(400).json({
            status:400,
            message:error.message
        })
    }else{
        return next()
    }
}
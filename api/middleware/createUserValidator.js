import joi from 'joi'

const userSchema = joi.object({
    name: joi.string().required(),
    lastName: joi.string().required(),
    birthday: joi.date().required(),
    email: joi.string().required(),
    phone: joi.string().required(),
    password: joi.string().required(),
    role: joi.string().valid('user', 'admin').default('user')
});

export default async (req, res, next) => {
    try {
        await userSchema.validateAsync(req.body)
        next()
    } catch (error) {
       return res.status(401).json({ 
         msg: 'error al un crear user'
       }) 
    }
}
import Joi from "joi";

const userValidator = Joi.object({
    name:Joi.string().regex(/^[a-zA-Z]{1,20}$/).required().messages({
        'string.pattern.base':'Only letters, no more than 20 characters'
    })
})
export {userValidator}
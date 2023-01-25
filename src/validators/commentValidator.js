import Joi from "joi";

const commentValidator = Joi.object({
    name:Joi.string().min(0).max(50).required(),
    body:Joi.string().min(0).max(180).required()
})

export {commentValidator}
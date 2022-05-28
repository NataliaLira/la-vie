import { validate, Joi } from "express-validation";

export const update = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    nome: Joi.string(),
    email: Joi.string().email(),
    senha: Joi.string(),
    apresentacao: Joi.string(),
  }),
});

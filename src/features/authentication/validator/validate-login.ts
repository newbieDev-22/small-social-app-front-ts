import Joi from "joi";
import validateWrapper from "../../../utils/validate-wrapper";
import { ILoginInput } from "../../../data-type/auth";

const loginSchema = Joi.object({
  email: Joi.string().required().messages({
    "string.empty": `Email is required.`,
  }),
  password: Joi.string().required().messages({
    "string.empty": `Password is required.`,
  }),
}).meta({ className: "ILoginInput" });

const validateLogin = (input: ILoginInput) =>
  validateWrapper<ILoginInput>(loginSchema, input);

export default validateLogin;

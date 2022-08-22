import { validate } from 'class-validator';

export const validateAndExtract = async (params) => {
  const errors = await validate(params);
  const massagedErrors: any = {};
  errors.forEach((e) => {
    const property = e.property;
    const constrainKey = Object.keys(e.constraints)[0];
    massagedErrors[property] = e.constraints[constrainKey];
  });
  return massagedErrors;
};

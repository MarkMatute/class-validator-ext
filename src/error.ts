import { validate } from 'class-validator';

export const validateAndExtract = async (params) => {
  const errors = await validate(params);
  const massagedErrors = errors.map(e => {
    const property = e.property;
    const constrainKey = Object.keys(e.constraints)[0];
    return {
      [property]: e.constraints[constrainKey]
    };
  });
  return massagedErrors;
};


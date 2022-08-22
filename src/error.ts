import { validate } from 'class-validator';

export interface ExtractedError {
  isValid: boolean;
  errors: [string: string][];
}

export const validateAndExtract = async (params: any): Promise<ExtractedError> => {
  const errors = await validate(params);
  const massagedErrors: any = {};
  errors.forEach((e) => {
    const property = e.property;
    const constrainKey = Object.keys(e.constraints)[0];
    massagedErrors[property] = e.constraints[constrainKey];
  });

  return {
    isValid: errors.length === 0,
    errors: massagedErrors,
  };
};

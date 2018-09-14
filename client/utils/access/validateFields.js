// @flow
import { string } from 'yup';

// Create a object with validation rules from yup to be used on access form fields validation
// Each property validates its own field by a defined rule.
const validateSchemas = {
  fullname: string()
    .min(6, 'Fullname is short. Should be at least 6 characters')
    .test('is-valid-name', 'Name invalid. Check incorrect whitespace', (value) => {
      const whitespaceBeginning = value[0] === ' ';
      const whitespaceEnd = value[value.length - 1] === ' ';
      const hasMoreThanOneWhitespace = value.includes('  ');

      const isValid = !whitespaceBeginning && !whitespaceEnd && !hasMoreThanOneWhitespace;
      return isValid;
    }),
  email: string().email('E-mail is not valid!'),
  password: string()
    .min(6, 'Should be at least 6 characters')
    .matches(/^(?!.*\s)/, 'Should not have whitespace')
    .matches(/(?=.*[a-z])/, 'Should have at least one lowercase character')
    .matches(/^(?=.*[A-Z])/, 'Should have at least one uppercase character')
    .matches(/^(?=.*[0-9])/, 'Should have at least one number')
    .matches(/^(?=.*[!@#$%^&*])/, 'Should have at least one symbol'),
};

/**
 * @function Helpers#validateFields
 * @param {string} field - Stores the field to be validated
 * @description This is a closure where the first function stores the field to be validated
 * and the result function receives the value to be validated and return if it's valid or not.
 * If it's not valid, validateSync throws ValidationError
 */
const validationFunction = (field: string) => (value: string) => {
  validateSchemas[field].validateSync(value);
};

export default validationFunction;

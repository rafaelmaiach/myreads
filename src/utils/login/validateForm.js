import { object, string } from 'yup';

/**
 * @function getValidationSchema
 * @description Creates a validation schema using YUP to use in Formik
 * @param {object} values - Object containing the form values
 * @returns Yup schema for validation.
 */
const getValidationSchema = formValues => (
  object().shape({
    email: string()
      .email('E-mail is not valid!') // Verify if email is in pattern email@example.com
      .required('E-mail is required!'),
    password: string()
      .min(8, 'Should be at least 8 characters')
      .matches(/^(?=.*[!@#$%^&*])/, 'Should have at least one of !,@,#,$,%,^,&,*')
      .matches(/^(?=.*[0-9])/, 'Should have at least one number')
      .matches(/^(?=.*[A-Z])/, 'Should have at least one uppercase character')
      .matches(/(?=.*[a-z])/, 'Should have at least one lowercase character')
      .required('Password is required'),
    passwordConfirmation: string()
      .oneOf([formValues.password], 'Passwords must be equals!')
      .required('Password confirmation is required!'),
  })
);

/**
 * @function getErrorsFrom
 * @description Yup returns a ValidationError object that will be transformed
 * at an object with specified errors created on LoginForm
 * @param {object} validationError - Object containing information about the error
 * @returns Object with key as the error type and value as the error description
 */
const getErrorsFrom = validationError => (
  // errors: the object that will be returned with the current errors that are happening
  // currentError: current error got from all validation errors
  validationError.inner.reduce((errors, currentError) => ({
    ...errors,
    // path: error key
    // errors[0]: error description
    [currentError.path]: currentError.errors[0],
  }), {})
);

/**
 * @function validateForm
 * @description Get the current form values and validate them using yup schema
 */
export default (values) => {
  const validationSchema = getValidationSchema(values);

  try {
    validationSchema.validateSync(values, { abortEarly: false });
    return {};
  } catch (validationError) {
    return getErrorsFrom(validationError);
  }
};

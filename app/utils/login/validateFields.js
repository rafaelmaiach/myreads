// @flow
import { string } from 'yup';

// Obs: validateSync throws ValidationError if not valid

const validateSchemas = {
  fullname: string().min(6, 'Fullname is short. Should be at least 6 characters'),
  email: string().email('E-mail is not valid!'),
  password: string()
    .min(6, 'Should be at least 6 characters')
    .matches(/(?=.*[a-z])/, 'Should have at least one lowercase character')
    .matches(/^(?=.*[A-Z])/, 'Should have at least one uppercase character')
    .matches(/^(?=.*[0-9])/, 'Should have at least one number')
    .matches(/^(?=.*[!@#$%^&*])/, 'Should have at least one of !,@,#,$,%,^,&,*'),
};

export default (field: string) => (value: string) => {
  validateSchemas[field].validateSync(value);
};

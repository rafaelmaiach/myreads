import zxcvbn from 'zxcvbn';

export const validateFullname = (value) => {
  const fullnameLength = value.trim().length;
  const fullnameInvalid = fullnameLength < 6;

  if (fullnameInvalid) throw new Error('Fullname should be at least 6 characters length');
};

export const validateEmail = (value) => {
  if (value !== 'a@a.com') throw new Error('Email is invalid');
};

export const validatePasswordStrong = (value: string) => {
  if (value.length <= this.minLength) throw new Error('Password is short');

  if (zxcvbn(value).score < this.minStrength) throw new Error('Password is weak');
};

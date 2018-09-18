import validationFunction from '../validateFields';

describe('Utils Access', () => {
  it('Validate field success for fullname', () => {
    const fullname = validationFunction('fullname');

    try {
      // Runs the YUP validator. As yup throws an error, I'm using try catch
      fullname('testando');
      expect(1).toEqual(1);
    } catch (ValidationError) {
      expect(0).toEqual(1);
    }
  });

  it('Validate field success for email', () => {
    const email = validationFunction('email');

    try {
      // Runs the YUP validator. As yup throws an error, I'm using try catch
      email('a@a.c');
      expect(1).toEqual(1);
    } catch (ValidationError) {
      expect(0).toEqual(1);
    }
  });

  it('Validate field success for password', () => {
    const password = validationFunction('password');

    try {
      // Runs the YUP validator. As yup throws an error, I'm using try catch
      password('aA123@');
      expect(1).toEqual(1);
    } catch (ValidationError) {
      expect(0).toEqual(1);
    }
  });

  it('Validate field error for fullname', () => {
    const fullname = validationFunction('fullname');

    try {
      // Runs the YUP validator. As yup throws an error, I'm using try catch
      fullname('test');
      expect(0).toEqual(1);
    } catch (ValidationError) {
      expect(1).toEqual(1);
    }
  });

  it('Validate field error for email', () => {
    const email = validationFunction('email');

    try {
      // Runs the YUP validator. As yup throws an error, I'm using try catch
      email('email');
      expect(0).toEqual(1);
    } catch (ValidationError) {
      expect(1).toEqual(1);
    }
  });

  it('Validate field error for password', () => {
    const password = validationFunction('password');

    try {
      // Runs the YUP validator. As yup throws an error, I'm using try catch
      password('password');
      expect(0).toEqual(1);
    } catch (ValidationError) {
      expect(1).toEqual(1);
    }
  });
});

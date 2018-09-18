import React from 'react';
import { mount } from 'enzyme';

import InvalidFormMessage from '../InvalidFormMessage';

describe('Access Form Elements', () => {
  it('Renders Invalid Form Message for User Exists', () => {
    const type = 'userExists';
    const text = 'This e-mail is already registered';

    const wrapper = mount(<InvalidFormMessage type={type} />);

    const span = wrapper.find('span');

    expect(span.text()).toEqual(text);
  });

  it('Renders Invalid Form Message for Invalid User', () => {
    const type = 'invalidUser';
    const text = 'Invalid e-mail or password';

    const wrapper = mount(<InvalidFormMessage type={type} />);

    const span = wrapper.find('span');

    expect(span.text()).toEqual(text);
  });

  it('Renders Invalid Form Message for Invalid Form', () => {
    const type = 'invalidForm';
    const text = 'Invalid form';

    const wrapper = mount(<InvalidFormMessage type={type} />);

    const span = wrapper.find('span');

    expect(span.text()).toEqual(text);
  });

  it('Renders empty Invalid Form Message for empty type', () => {
    const type = '';
    const text = '';

    const wrapper = mount(<InvalidFormMessage type={type} />);

    const span = wrapper.find('span');

    expect(span.text()).toEqual(text);
    wrapper.unmount();
  });
});

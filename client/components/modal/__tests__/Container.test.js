import React from 'react';
import { mount } from 'enzyme';

import Close from 'Components/common/Close';
import ModalHeader from '../Header';
import ModalDescription from '../Description';
import Container from '../Container';

describe('Modal', () => {
  it('Renders Container', () => {
    const wrapper = mount(<Container />);

    expect(wrapper.find(Close)).toHaveLength(1);
    expect(wrapper.find(ModalHeader)).toHaveLength(1);
    expect(wrapper.find(ModalDescription)).toHaveLength(1);

    wrapper.unmount();
  });
});

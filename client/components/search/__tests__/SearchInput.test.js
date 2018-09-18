import React from 'react';
import { mount } from 'enzyme';

import DebounceInput from 'Components/common/DebounceInput';
import SearchInput from '../SearchInput';

describe('Search', () => {
  it('Renders Search Input with no books were found', () => {
    const wrapper = mount(<SearchInput />);

    expect(wrapper.find(DebounceInput)).toHaveLength(1);

    wrapper.unmount();
  });
});

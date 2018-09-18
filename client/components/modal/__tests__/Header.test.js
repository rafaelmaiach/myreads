import React from 'react';
import { mount } from 'enzyme';

import Authors from 'Components/bookshelf/bookElements/Authors';
import Image from 'Components/bookshelf/bookElements/Image';
import Publisher from 'Components/bookshelf/bookElements/Publisher';
import PublishedDate from 'Components/bookshelf/bookElements/PublishedDate';
import Preview from 'Components/bookshelf/bookElements/Preview';
import Stars from 'Components/bookshelf/bookElements/Stars';
import Subtitle from 'Components/bookshelf/bookElements/Subtitle';
import Title from 'Components/bookshelf/bookElements/Title';
import Header from '../Header';

describe('Modal', () => {
  it('Renders Header', () => {
    const wrapper = mount(<Header />);

    expect(wrapper.find(Authors)).toHaveLength(1);
    expect(wrapper.find(Image)).toHaveLength(1);
    expect(wrapper.find(Publisher)).toHaveLength(1);
    expect(wrapper.find(PublishedDate)).toHaveLength(1);
    expect(wrapper.find(Preview)).toHaveLength(1);
    expect(wrapper.find(Stars)).toHaveLength(1);
    expect(wrapper.find(Subtitle)).toHaveLength(1);
    expect(wrapper.find(Title)).toHaveLength(1);

    wrapper.unmount();
  });
});

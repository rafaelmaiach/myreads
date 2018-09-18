import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

import Header from 'Components/header/Header';
import UserLogout from 'Components/header/HeaderUserLogout';
import HeaderTab from 'Components/header/HeaderTab';
import HeaderSearchIcon from 'Components/header/HeaderSearchIcon';
import BookshelfHeader from '../BookshelfHeader';

jest.mock('Assets/icons/search.svg', () => '');

describe('Bookshelf', () => {
  it('Renders Bookshelf Header', () => {
    const wrapper = mount(<Router><BookshelfHeader /></Router>);

    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(UserLogout)).toHaveLength(1);
    expect(wrapper.find(HeaderTab)).toHaveLength(3);
    expect(wrapper.find(HeaderSearchIcon)).toHaveLength(1);

    wrapper.unmount();
  });
});

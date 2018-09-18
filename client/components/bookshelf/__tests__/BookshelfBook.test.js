import React from 'react';
import { mount } from 'enzyme';

import ModalContainer from 'Components/modal/Container';
import ShelfDropdown from '../shelfDropdown/Dropdown';
import CurrentShelfTag from '../bookElements/CurrentShelfTag';
import Image from '../bookElements/Image';
import Title from '../bookElements/Title';
import Subtitle from '../bookElements/Subtitle';
import Stars from '../bookElements/Stars';
import Authors from '../bookElements/Authors';
import Description from '../bookElements/Description';
import SeeMoreContainer from '../bookElements/SeeMoreContainer';

import BookshelfBook from '../BookshelfBook';

// jest.mock('Assets/icons/search.svg', () => '');

describe('Bookshelf', () => {
  it('Renders Bookshelf Book without modal and with search page', () => {
    const bookInfo = {
      authors: ['authors'],
      averageRating: 3,
      description: 'description',
      imageLinks: {
        thumbnail: '',
      },
      previewLink: 'link',
      publisher: 'pub',
      publishedDate: 'pubdate',
      subtitle: 'subtitle',
      title: 'title',
      shelf: 'currentlyReading',
    };

    const props = {
      bookInfo,
      updateBook: jest.fn(),
      removeBook: jest.fn(),
      isSearchPage: true,
    };

    const wrapper = mount(<BookshelfBook {...props} />);

    expect(wrapper.find(ShelfDropdown)).toHaveLength(1);
    expect(wrapper.find(CurrentShelfTag)).toHaveLength(1);
    expect(wrapper.find(Image)).toHaveLength(1);
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Subtitle)).toHaveLength(1);
    expect(wrapper.find(Stars)).toHaveLength(1);
    expect(wrapper.find(Authors)).toHaveLength(1);
    expect(wrapper.find(Description)).toHaveLength(1);
    expect(wrapper.find(SeeMoreContainer)).toHaveLength(1);

    wrapper.unmount();
  });

  it('Renders Bookshelf Book without modal and without search page', () => {
    const bookInfo = {
      authors: ['authors'],
      averageRating: 3,
      description: 'description',
      imageLinks: {
        thumbnail: '',
      },
      previewLink: 'link',
      publisher: 'pub',
      publishedDate: 'pubdate',
      subtitle: 'subtitle',
      title: 'title',
      shelf: 'currentlyReading',
    };

    const props = {
      bookInfo,
      updateBook: jest.fn(),
      removeBook: jest.fn(),
      isSearchPage: true,
    };

    const wrapper = mount(<BookshelfBook {...props} />);

    expect(wrapper.find(ShelfDropdown)).toHaveLength(1);
    expect(wrapper.find(Image)).toHaveLength(1);
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Subtitle)).toHaveLength(1);
    expect(wrapper.find(Stars)).toHaveLength(1);
    expect(wrapper.find(Authors)).toHaveLength(1);
    expect(wrapper.find(Description)).toHaveLength(1);
    expect(wrapper.find(SeeMoreContainer)).toHaveLength(1);

    wrapper.unmount();
  });

  it('Renders Bookshelf Book with modal and without search page', () => {
    const bookInfo = {
      authors: ['authors'],
      averageRating: 3,
      description: 'description',
      imageLinks: {
        thumbnail: '',
      },
      previewLink: 'link',
      publisher: 'pub',
      publishedDate: 'pubdate',
      subtitle: 'subtitle',
      title: 'title',
      shelf: 'currentlyReading',
    };

    const props = {
      bookInfo,
      updateBook: jest.fn(),
      removeBook: jest.fn(),
      isSearchPage: false,
    };

    const wrapper = mount(<BookshelfBook {...props} />);

    wrapper.find(SeeMoreContainer).find('button').simulate('click');

    expect(wrapper.find(ModalContainer)).toHaveLength(1);
    expect(wrapper.find(ShelfDropdown)).toHaveLength(1);

    // Length 2 because of modal and normal book informations
    expect(wrapper.find(Image)).toHaveLength(2);
    expect(wrapper.find(Title)).toHaveLength(2);
    expect(wrapper.find(Subtitle)).toHaveLength(2);
    expect(wrapper.find(Stars)).toHaveLength(2);
    expect(wrapper.find(Authors)).toHaveLength(2);
    expect(wrapper.find(Description)).toHaveLength(1);
    expect(wrapper.find(SeeMoreContainer)).toHaveLength(1);

    wrapper.unmount();
  });

  it('Renders Bookshelf Book with modal and with search page', () => {
    const bookInfo = {
      authors: ['authors'],
      averageRating: 3,
      description: 'description',
      imageLinks: {
        thumbnail: '',
      },
      previewLink: 'link',
      publisher: 'pub',
      publishedDate: 'pubdate',
      subtitle: 'subtitle',
      title: 'title',
      shelf: 'currentlyReading',
    };

    const props = {
      bookInfo,
      updateBook: jest.fn(),
      removeBook: jest.fn(),
      isSearchPage: true,
    };

    const wrapper = mount(<BookshelfBook {...props} />);

    wrapper.find(SeeMoreContainer).find('button').simulate('click');

    expect(wrapper.find(ModalContainer)).toHaveLength(1);
    expect(wrapper.find(ShelfDropdown)).toHaveLength(1);

    // Length 2 because of modal and normal book informations
    expect(wrapper.find(Image)).toHaveLength(2);
    expect(wrapper.find(Title)).toHaveLength(2);
    expect(wrapper.find(Subtitle)).toHaveLength(2);
    expect(wrapper.find(Stars)).toHaveLength(2);
    expect(wrapper.find(Authors)).toHaveLength(2);
    expect(wrapper.find(Description)).toHaveLength(1);
    expect(wrapper.find(SeeMoreContainer)).toHaveLength(1);

    wrapper.unmount();
  });
});

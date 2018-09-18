import {
  groupBooksByShelf,
  debounce,
  getShelfName,
  isMobile,
} from '../helpers';

describe('Utils Helpers', () => {
  it('Group books by shelf', () => {
    const array = [{ shelf: 'currentlyReading' }];

    expect(groupBooksByShelf(array)).toMatchObject({
      currentlyReading: [{
        shelf: 'currentlyReading',
      }],
      wantToRead: [],
      read: [],
    });
  });

  it('Group books by shelf with prop', () => {
    const array = [{ id: 1, shelf: 'currentlyReading' }];

    expect(groupBooksByShelf(array, 'id')).toMatchObject({
      currentlyReading: [1],
      wantToRead: [],
      read: [],
    });
  });

  it('Creates debounce', () => {
    const innerFn = jest.fn();
    const debounceFn = debounce(innerFn, 300);
    expect(typeof debounceFn).toEqual(typeof (jest.fn()));

    jest.useFakeTimers();
    debounceFn();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
  });

  it('Get shelf name', () => {
    const shelfs = ['currentlyReading', 'wantToRead', 'read', ''];
    const names = ['Currently Reading', 'Want to Read', 'Read', 'None'];

    shelfs.forEach((shelf, index) => {
      expect(getShelfName(shelf)).toEqual(names[index]);
    });
  });

  it('Check if is mobile', () => {
    expect(isMobile.any()).toBeFalsy();
  });
});

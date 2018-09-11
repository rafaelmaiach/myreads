// Using reduce to group the books
export const groupBooksByShelf = (arr, prop = null) => (
  arr.reduce(
    (prev, curr) => {
      if (prop) {
        prev[curr.shelf].push(curr[prop]);
        return prev;
      }

      prev[curr.shelf].push(curr);
      return prev;
    },
    {
      currentlyReading: [],
      wantToRead: [],
      read: [],
    }
  )
);

export const debounce = (fn, time) => {
  let timeout;

  return function (...args) { //eslint-disable-line
    const functionCall = () => fn.apply(this, args);
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

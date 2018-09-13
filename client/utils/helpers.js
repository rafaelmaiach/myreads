/**
 * @function Helpers#groupBooksByShelf
 * @param {array} arr - It's an array of book objects
 * @param {string} prop - Push to array the value of object[prop] if passed
 * @description Get an array of book objects and return an object with the
 * book objects separated by shelf. If the "prop" parameter is passed, it will
 * return the values of object[prop] instead on each shelf.
 */
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

/**
 * @function Helpers#debounce
 * @param  {function} fn - Function to be debounced
 * @param  {number} time - Delay time
 * @description Add debounce effect to the passed function
 */
export const debounce = (fn, time) => {
  let timeout;

  return function (...args) { //eslint-disable-line
    const functionCall = () => fn.apply(this, args);
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

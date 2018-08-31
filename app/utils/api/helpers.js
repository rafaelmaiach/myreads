// Using reduce to group the books
export const groupBooksByShelf = arr => (
  arr.reduce(
    (prev, curr) => {
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

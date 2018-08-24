const authorQuotesData = require('./data/AuthorQuotesData.json');

const randomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomQuote = () => {
  const { authorQuotes } = authorQuotesData;
  const randomNumber = randomNumberInRange(0, authorQuotes.length);
  return authorQuotes[randomNumber];
};

export default getRandomQuote;

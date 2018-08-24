import React, { Fragment } from 'react';

import getRandomQuote from '../../utils/getRandomQuote';

const AuthorQuotes = () => {
  const { quote, author } = getRandomQuote();

  return (
    <Fragment>
      <h1 className="quotes__box--text">
        {quote}
      </h1>
      <h3 className="quotes__box--author">
        {author}
      </h3>
    </Fragment>
  );
};

export default AuthorQuotes;

import React from 'react';
import Quote from './Quote';
import PropTypes from 'prop-types';

//takes a list of quotes and display a single one in list element. Since this component is just used to display a single quote, its considered presentational
export default function Quotes({ quotes }) {
  const quoteList = quotes.map((quote, i) => (
    <li key={i}>
      <Quote quote={quote} />
    </li>
  ));

  return (
    <ul>
      {quoteList}
    </ul>
  );
}

Quotes.propTypes = {
  quotes: PropTypes.array.isRequired
};


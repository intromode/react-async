import React from 'react';
import PropTypes from 'prop-types';

//not holding state so just a fn
//not doing anything but displaying data so considered presentational component
export default function Quote({ quote }) {
  return (
    <section>
      <img src={quote.image}/>
      <p>{quote.character}</p>
      <p>{quote.quote}</p>
    </section>
  );
}

Quote.propTypes = {
  quote: PropTypes.shape({
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

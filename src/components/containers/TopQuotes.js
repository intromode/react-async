//takes a count property and fetches that number of quotes from the futurama API.
//displays each quote so will need to import quotes(which takes the list of quotes and displays a single one)

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quotes from '../Quotes';
import { getQuotes } from '../../services/futuramaApi';

//will hold state? which will be the array of futurama quotes? why isn't app holding the quotes so that way on an update multiple child components can be given the new list? TRUE

//since it HOLDS state, its considered a container. since containers hold things

export default class TopQuotes extends PureComponent {
  static propTypes = {
    count: PropTypes.number
  }

  static defaultProps = {
    count: 10
  }

  //why not hold state in app
  state = {
    quotes: []
  }

  fetchQuotes = () => {
    getQuotes (this.props.count)
      .then(quotes => {
        this.setState({ quotes: quotes });
      });
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  render() {
    return <Quotes quotes={this.state.quotes} />;
  }
}



import React, { PureComponent } from 'react';
import TopQuotes from './containers/TopQuotes';


//App calls TopQuotes, which uses Quotes, which uses Quote 

//we could use a class with this.state or a function and import useState with React 

export default class App extends PureComponent{
  //quotes becomes string 

  render() {
    return (
      <>
        <button type="submit" onClick={() => location.reload()}>Top Quotes</button>
        <TopQuotes count={12} />
        <TopQuotes count={12} />
      </>
    );
  }
}

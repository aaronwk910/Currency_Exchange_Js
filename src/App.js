
import React, { Component } from 'react';
import Dropdowns from './components/interface.js';
import InputBar from './components/InputBar.js';

class App extends Component {
  state = {
    currency: 'USD',
    currency2: 'EUR',
    amount1: '3',
    amount2: '4',
  }

  render() {
    return (
      <React.Fragment>
        <Dropdowns />
        <InputBar />
      </React.Fragment>
    );
  }
}


export default App;

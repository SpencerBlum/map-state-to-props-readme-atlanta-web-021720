import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.orangePeel.length}</p>
      </div>
    );
  }
};


const vanilla = (orangePeel) => {
  debugger;
  return { orangePeel: ['a', 'b', 'c']  }
}
 
export default connect(vanilla)(App);



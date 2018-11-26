import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class App extends Component {
  render() {
    // $('body').hide();
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;

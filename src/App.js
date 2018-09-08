import React, { Component } from 'react';
// import './App.css';
import Header from './components/Header';
import Main from './components/Main';


class App extends Component {
  render() {
    return (
    <body>
      <div>
        <Header />
        </div>
      <div>
        <Main />
        </div>
      </body>
    );
  }
}

export default App;

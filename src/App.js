import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
// import logo from './logo.svg';
import Layout from './pages/layout';
import './App.scss';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
          </header> */}
          <Layout />
          
        </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import UserInfo from './components/UserInfo';
import Test from './components/Test';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">
              Welcome to React JS Social Oauth Login App
            </h1>
          </header>
          <UserInfo />
          <Test />
        </div>
      </Provider>
      
    );
  }
}

export default App;



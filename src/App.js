import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import UserInfo from './components/UserInfo';
import Login from './components/Login';

export default () => {
  <Provider store={store}>
    <UserInfo />
  </Provider>
}
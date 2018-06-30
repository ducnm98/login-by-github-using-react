import React, { Component, Fragment  } from 'react';
import Login from './Login';
import firebase from "firebase";
import base, { firebaseApp } from "../base";


class UserInfo extends Component {
  state = {
    email: null,
    name: null,
    picture: null,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async authData => {
    console.log(authData);
    const user = authData.user;
    console.log(user.photoURL);
    this.setState({
      email: user.email,
      name: user.displayName,
      picture: user.photoURL,
    });
  };

  authenticate = provider => {
    console.log(provider);
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    console.log("logout");
    await firebase.auth().signOut();
    this.setState({ email: null, name: null, picture: null });
  };


  render() {
    const logout = <button onClick={this.logout}>Log Out!</button>;
    if (!this.state.email) {
      return <Login authenticate={this.authenticate} />;
    }
    return (
      <div>
        <label>Email: {this.state.email}</label>
        <br />
        <label>Name: {this.state.name} </label>
        <br />
        <img src={this.state.picture} />
        <br />
        {logout}
      </div>
    );
  }
}

export default UserInfo;
import React, { Component, Fragment  } from 'react';
import Login from './Login';
import {connect} from 'react-redux';
import { EAFNOSUPPORT } from 'constants';
import { bindActionCreators } from 'redux';


class UserInfo extends Component {

  authenticate(){
    this.props.requestOauth();
  }

  render() {
    const logout = <button onClick={this.logout}>Log Out!</button>; 
    if (!this.state.email) { 
      return <Login authenticate={this.authenticate} />; 
    } 
    return (
      <div>
        <label>Email: {this.props.email}</label>
        <br />
        <label>Name: {this.props.name} </label>
        <br />
        <img src={this.props.picture} />
        <br />
        {logout}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  email: state.data.email,
  name: state.data.name,
  picture: state.data.picture,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestOauth }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);

  // const logout = <button onClick={this.logout}>Log Out!</button>;
    // if (!this.state.email) {
    //   return <Login authenticate={this.authenticate} />;
    // }
  // state = {
  //   email: null,
  //   name: null,
  //   picture: null,
  // };

  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.authHandler({ user });
  //     }
  //   });
  // }

  // authHandler = async authData => {
  //   console.log(authData);
  //   const user = authData.user;
  //   console.log(user.photoURL);
  //   this.setState({
    //     email: user.email,
  //     name: user.displayName,
  //     picture: user.photoURL,
  //   });
  // };

  // authenticate = provider => {
  //   console.log(provider);
  //   const authProvider = new firebase.auth[`${provider}AuthProvider`]();
  //   firebaseApp
  //     .auth()
  //     .signInWithPopup(authProvider)
  //     .then(this.authHandler);
  // };

  // logout = async () => {
  //   console.log("logout");
  //   await firebase.auth().signOut();
  //   this.setState({ email: null, name: null, picture: null });
  // };


}


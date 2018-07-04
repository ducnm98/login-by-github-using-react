import React, { Component, Fragment } from "react";
import Login from "./Login";
import { requestLogin, requestLogout } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  authenticate = (provider) => {
    this.props.requestLogin(provider);
  };

  logOut = () => {
    this.props.requestLogout();
  };

  render() {
    const logout = <button onClick={this.logOut}>Log Out!</button>;

    if (!this.props.user) {
      return <Login authenticate={this.authenticate} />;
    }
    return (
      <div>
        <label>Email: {this.props.user.email}</label>
        <br />
        <label>Name: {this.props.user.name} </label>
        <br />
        <img src={this.props.user.photoURL} />
        <br />
        {logout}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.oAuth.user
  };
};
// email: state.email,
// name: state.name,
// picture: state.photoURL,

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestLogin, requestLogout }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);

// class UserInfo extends Component {
//   state = {
//     email: null,
//     name: null,
//     picture: null,
//   };

//   componentDidMount() {
//     firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         this.authHandler({ user });
//       }
//     });
//   }

//   authHandler = async authData => {
//     console.log(authData);
//     const user = authData.user;
//     console.log(user.photoURL);
//     this.setState({
//       email: user.email,
//       name: user.displayName,
//       picture: user.photoURL,
//     });
//   };

//   authenticate = provider => {
//     console.log(provider);
//     const authProvider = new firebase.auth[`${provider}AuthProvider`]();
//     firebaseApp
//       .auth()
//       .signInWithPopup(authProvider)
//       .then(this.authHandler);
//   };

//   logout = async () => {
//     console.log("logout");
//     await firebase.auth().signOut();
//     this.setState({ email: null, name: null, picture: null });
//   };

//   render() {
//     const logout = <button onClick={this.logout}>Log Out!</button>;
//     if (!this.state.email) {
//       return <Login authenticate={this.authenticate} />;
//     }
//     return (
//       <div>
//         <label>Email: {this.state.email}</label>
//         <br />
//         <label>Name: {this.state.name} </label>
//         <br />
//         <img src={this.state.picture} />
//         <br />
//         {logout}
//       </div>
//     );
//   }
// }

// export default UserInfo;

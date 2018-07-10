import React, { Component, Fragment } from "react";
import Login from "./Login";
import { requestLogin, requestLogout } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Test extends Component {
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
    counter: state.test.counter
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
)(Test);
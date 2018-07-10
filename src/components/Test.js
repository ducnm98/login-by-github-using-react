import React, { Component, Fragment } from "react";
import Login from "./Login";
import { requestTakeEvery, requestTakeLatest } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Test extends Component {
  constructor(props) {
    super(props);
  }

  takeEvery = () => {
    let data = this.props.counter;
    this.props.requestTakeEvery(data);
  };

  takeLatest = () => {
    let data = this.props.counter;
    this.props.requestTakeLatest(data);
  };

  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <br />
        <button onClick={this.takeEvery}>Take Every</button>
        <button onClick={this.takeLatest}>Take Latest</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.test.counter,
  };
};
// email: state.email,
// name: state.name,
// picture: state.photoURL,

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestTakeEvery, requestTakeLatest }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
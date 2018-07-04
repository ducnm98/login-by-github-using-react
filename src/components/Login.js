import React from 'react'; 
 
const Login = props => ( 
  <div className="login"> 
    <p>Please click button below to sign in!</p> 
    <button className="github" onClick={() => props.authenticate("Github")}> 
      Log In With Github 
    </button> 
  </div>  
); 
 
export default Login;

// import React, { Component  } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

// class Login extends Component {
//   componentDidMount() {
//     this.props.requestOauth();
//   }
  
//   render() {
//     return (
//       <div className="login">
//         <p>Please click button below to sign in!</p>
//         <button className="github" onClick={() => props.authenticate("Github")}>
//           Log In With Github
//         </button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   data: state.data
// });

// const mapDispatchToProps = dispath =>
//   bindActionCreators({ requestOauth })

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
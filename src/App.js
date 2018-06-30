import React, { Component } from 'react';
import Login from './Login';
import axios from 'axios';

const CLIENT_ID = '8f920792d996ef2a2927';
const REDIRECT_URI = 'http://localhost:3000/callback';
const CLIENT_SECRET = '87a68f85b5d75648a0ff4c7b9c439f8b34777829';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      status: 'INITIAL',
      token: null,
      code: null,
      avatar_url: null,
      name: null,
    };
    this.info = (
      <div>
        ăg
      </div>
    );
  }
  

  async componentDidMount() {
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];

      if (code) {

      this.setState({
        code: code,
        status: 'FINISHED_LOADING',
      });

      


      // await axios.post('https://github.com/login/oauth/access_token', {
      //   client_id: `${CLIENT_ID}`,
      //     code: code,
      //     redirect_uri: `${REDIRECT_URI}`,
      //     client_secret: `${CLIENT_SECRET}`,
      //     scopes: 'user',
      // }).then(res => {
      //   console.log('res.data')
      // })

      // await fetch('https://github.com/login/oauth/access_token',{
      //   body: { 
      //     client_id: `${CLIENT_ID}`,
      //     code: code,
      //     redirect_uri: `${REDIRECT_URI}`,
      //     client_secret: `${CLIENT_SECRET}`,
      //     scopes: 'user',
      //   },
      //   method: 'POST',
      //   headers: { 
      //     'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
      //     'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      //   },
      //   mode: 'no-cors',
        
      // }).then(res => {
      //   console.log(res)
      // })

      // await axios.post(`https://github.com/login/oauth/access_token`, {
      //   client_id: `${CLIENT_ID}`,
      //   client_secrect: `${CLIENT_SECRET}`,
      //   code: `${code}`,
      //   type: 'user_agent',
      //   redirect_uri: `${REDIRECT_URI}`,
      // })
      // .then(res => {
      //   console.log(res)
      // })


      // .catch((err)=>console.log(err));

      await fetch(`https://github.com/login/oauth/access_token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'type': 'user_agent',
        },
        mode: 'no-cors',
        body: JSON.stringify({
          client_id: `${CLIENT_ID}`,
          code: code,
          redirect_uri: `${REDIRECT_URI}`,
          client_secret: `${CLIENT_SECRET}`,
          scopes: 'user',
        })
      }).then(res => res.json())
      .then(access_token => {
        console.log(access_token);
      })
      .catch((err)=>console.log(err));

      

      let token = this.state.token;
      if (token) {
        fetch(`https://api.github.com/user?access_token=${token}`)
        .then(res => res.json())
        .then((userInfo) => {
          this.setState({
            avatar_url: userInfo.avatar_url,
            name: userInfo.name, 
          })

          this.info = (
              <div>
                <img src={this.state.avatar_url} />
                <h1>{this.state.name}</h1>
              </div>
          );
        })
      }
    }
  }

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}>
          Login
        </a>
        {this.info}
      </div>
        
    );
  }
}

export default App;

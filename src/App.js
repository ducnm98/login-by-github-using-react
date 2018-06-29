import React, { Component } from 'react';

const CLIENT_ID = '8f920792d996ef2a2927';
const REDIRECT_URI = 'http://localhost:3000';
const CLIENT_SECRET = '87a68f85b5d75648a0ff4c7b9c439f8b34777829';

class App extends Component {
  state = {
    status: 'INITIAL',
    token: null,
    code: null,
    avatar_url: null,
    name: null,
  }

  componentDidMount() {
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];

      if (code) {

      this.setState({
        code: code,
        status: 'FINISHED_LOADING',
      });

      fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' 
        },
        body: JSON.stringify({
          client_id: `${CLIENT_ID}`,
          code: code,
          redirect_uri: `${REDIRECT_URI}`,
          client_secret: `${CLIENT_SECRET}`,
        })
      }).then(res => res.json())
      .then(access_token => {
        console.log(access_token);
        this.setState({
          token: access_token,
        })
      })

      // let token = getState(token => { return token; });
      // if (token) {
      //   fetch(`https://api.github.com/user?access_token=${token}`)
      //   .then(res => res.json())
      //   .then((userInfo) => {
      //     this.setState({
      //       avatar_url: userInfo.avatar_url,
      //       name: userInfo.name, 
      //     })

      //     getState((avatar_url, name) => {
      //       let info = (
      //         <div>
      //           <img src={avatar_url} />
      //           <h1>{name}</h1>
      //         </div>
      //       );
      //     })
      //   })
      // }
    }
  }

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}>
          Login
        </a>
        {/* {info} */}
      </div>
        
    );
  }
}

export default App;

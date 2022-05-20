import React from 'react';

class LoginContainer extends React.Component {
  render() {
    return (
      <form className="login-container">
        <h1>Login</h1>
        <div className="login-form">
          <input type="text" placeholder="Username"/>
        </div>
        <div className="login-form">
          <input type="text" placeholder="Password"/>
        </div>
        <div className="login-form btn">
          <p>Submit</p>
        </div>
      </form>
    );
  }
}

export default LoginContainer;
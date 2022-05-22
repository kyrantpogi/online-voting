import { useState } from 'react';

function LoginContainer(props) {
  return (
    <form className="login-container">
      <h1>Login</h1>
      <div className="login-form">
        <input onChange={ props.changeUsername } type="text" placeholder="Username"/>
      </div>
      <div className="login-form">
        <input type="text" onChange={ props.changePassword } placeholder="Password"/>
      </div>
      <div className="login-form btn" onClick={ props.submitFunc }>
        <p>Submit</p>
      </div>
    </form>
  );
}

export default LoginContainer;
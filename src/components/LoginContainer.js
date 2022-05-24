import { useState } from 'react';

function LoginContainer(props) {
  return (
    <form className="login-container">
      <h1>Login</h1>
      <div className="login-form error">
        <input onChange={ props.changeUid } type="text" placeholder="UID"/>
      </div>
      <div className="login-form">
        <input type="password" onChange={ props.changePassword } placeholder="Password"/>
      </div>
      <div className="login-form btn" onClick={ props.submitFunc }>
        <p>Submit</p>
      </div>
    </form>
  );
}

export default LoginContainer;
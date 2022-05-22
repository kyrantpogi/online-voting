import LoginContainer from './LoginContainer.js';
import { useState } from 'react';

function VoteLogin() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const inputUsername = (event) => {
    setUsername(event.target.value);
  }

  const inputPassword = (event) => {
    setPassword(event.target.value);
  }

  const submitFunc = () => {
    console.log(username);
    console.log(password);
    alert(username);
  }

  return (
    <LoginContainer changeUsername={ inputUsername } changePassword={ inputPassword } submitFunc={ submitFunc }/>
  );
}


export default VoteLogin;
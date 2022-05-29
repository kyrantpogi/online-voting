import LoginContainer from './LoginContainer.js';
import { useState } from 'react';
import makeFormRed from './global/global.js';

function VoteLogin() {
  let [uid, setUid] = useState("");
  let [password, setPassword] = useState("");

  const submitFunc = async () => {
    let data = {
      userType: "voter",
      uid: uid,
      password: btoa(password)
    }

    let post = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(data)
    });

    let response = await post.json();
    
    if (response.authenticate) {
      //redirect
    } else {
      makeFormRed();
    }
  }

  return (
    <LoginContainer changeUid={ (event) => { setUid(event.target.value); } } 
      changePassword={ (event) => { setPassword(event.target.value); } } 
      submitFunc={ submitFunc }
    />
  );
}


export default VoteLogin;
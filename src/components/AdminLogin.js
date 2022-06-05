import LoginContainer from './LoginContainer.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import makeFormRed from './global/global.js';

function AdminLogin() {
  let [uid, setUid] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let submitFunc = async () => {
    let data = {
      uid: uid,
      password: btoa(password),
      userType: "admin"
    }

    let post = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(data)
    });

    let response = await post.json();

    if (response.authenticate) {
      sessionStorage.setItem("token", response.token);
      navigate("/admin-dashboard");
    } else {
      makeFormRed();
    }
  }

  return (
    <LoginContainer 
    changeUid={ (event) => { setUid(event.target.value); } }
    changePassword={ (event) => { setPassword(event.target.value) }  }
    submitFunc={ submitFunc }
    />
  );
}


export default AdminLogin;
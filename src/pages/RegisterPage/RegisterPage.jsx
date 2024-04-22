import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [fingertoken, setFingerToken] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate()

  const registerUser = async (e) => {
      e.preventDefault();

      let formData = new FormData();
      formData.append("username", username);
      formData.append("token", fingertoken)
      formData.append("password", password);


      const requestOptions = {
          method: "POST",
          body: formData,
        };
      
      const response = await fetch("http://210.211.97.224:8004/api/fingerprint/create_bussiness", requestOptions);

      const data = await response.json();

      if (data.status == 0) {
          navigate("/")
      } else {
          console.log('Something went wrong while registed!');
      }
  };
  return (
    <div>
        <form onSubmit={registerUser}>
            <input type="text" name="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" name="fingertoken" placeholder="Enter your secret token" value={fingertoken} onChange={(e) => {console.log(fingertoken); setFingerToken(e.target.value)}} />
            <input type="password" name="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="button is-primary" type="submit">
                Register
            </button>
        </form>
        </div>
  )
}

export default RegisterPage
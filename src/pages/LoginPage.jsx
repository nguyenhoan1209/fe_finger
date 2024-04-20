import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
    const [token, setToken] = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: JSON.stringify(
              `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`
            ),
          };
        
        const response = await fetch("http://210.211.97.224:8004/api/fingerprint/auth", requestOptions);

        const data = await response.json();

        if (data) {
            localStorage.setItem('authToken', JSON.stringify(data));
            setToken(data);
        } else {
            console.log('Something went wrong while logging in the user!');
        }
    };

    return (
        <div>
            <form onSubmit={loginUser}>
                <input type="text" name="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" name="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="button is-primary" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
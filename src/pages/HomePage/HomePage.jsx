import React from "react";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import './HomePage.css'

const HomePage = () => {
  const [token, setToken] = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutUser = () => {
    // e.preventDefault()
    localStorage.removeItem("authToken");
    setToken(null);
    navigate("/login");
  };

  return (
    <>
      <div>HomePage</div>
      {token ? (
        <div>
          Hello {token.msg}
          <button onClick={logoutUser}>Logout user</button>
        </div>
      ) : (
        <div>Goto login</div>
      )}
    </>
  );
};

export default HomePage;

import React from "react";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import './HomePage.css'
import Sidebar from "../../components/Sidebar";

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
      <Sidebar/>
    </>
  );
};

export default HomePage;

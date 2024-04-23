import React from "react";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import './HomePage.css'
import Hero from "../../components/Hero/Hero";
import { Separator } from "@radix-ui/react-separator";
import AboutUs from "../../components/AboutUs/AboutUs";
import Card from "../../components/Card";

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
    <Hero/>
    <Separator/>
    <AboutUs/>
    <Separator/>
    <Card/>
    </>
  );
};

export default HomePage;

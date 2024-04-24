import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import FingerRegisterPage from "./pages/FingerRegisterPage/FingerRegisterPage";
import FingerVerifyPage from "./pages/FingerVerifyPage/FingerVerifyPage";

import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";


const App = () => {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/finger-register" element={<PrivateRoute><FingerRegisterPage/></PrivateRoute>} />
            <Route path="/finger-verify" element={<PrivateRoute><FingerVerifyPage/></PrivateRoute>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;

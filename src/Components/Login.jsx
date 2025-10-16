import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const isInputValid = (value) => value && value.length > 0;
  const loginHandler = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    console.log("result from login jsx", result.data.user);
    setTimeout(() => {
      navigate("/profile");
    }, 2000);
  };

  return (
    <div className="login">
      <form onSubmit={loginHandler} className="login-form">
        <h1 className="login-header">Signin to your <br />PopX account</h1>
        <p className="login-subtext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum
          dolor sit amet, consectetur adipiscing elit,
        </p>

        {/* Email Input */}
        <div className="login-container">
          <div
            className={`entryarea ${isInputValid(email) ? "input-valid" : ""}`}
          >
            <input
              value={email}
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="labelline">Email Address*</div>
          </div>
        </div>

        {/* Password Input */}
        <div className="login-container">
          <div
            className={`entryarea ${
              isInputValid(password) ? "input-valid" : ""
            }`}
          >
            <input
              value={password}
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="labelline">Password*</div>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="login-submit-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

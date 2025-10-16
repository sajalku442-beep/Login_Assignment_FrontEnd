import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="landing-top"></div>
        <div className="landing-bottom">
          <div className="landing">
            <h2>Welcome to PopX</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/register">
              <button className="landing-btn-create">Create Account</button>
            </Link>
            <Link to="/login">
              <button className="landing-btn-login">
                Already Registered? Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

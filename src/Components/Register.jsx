import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const { register } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    agency: "",
  });
  const isInputValid = (name) => formData[name] && formData[name].length > 0;
  const changehandler = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const submithandaler = async (e) => {
    e.preventDefault();
    console.log("Submitting form:", formData); // debug line
    const { name, email, phone, company, password, agency } = formData;
    const result = await register(
      name,
      email,
      phone,
      company,
      password,
      agency
    );
    console.log("result from register jsx", result);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <>
      <div className="register">
        <form onSubmit={submithandaler} className="register-form">
         
            <h1 className="register-header">
              Create Your <br /> PopX Account
            </h1>
            <div className="register-container">
              <div
                className={`entryarea ${
                  isInputValid("name") ? "input-valid" : ""
                }`}
              >
                <input
                  value={formData.name}
                  type="text"
                  name="name"
                  onChange={changehandler}
                  required
                />
                <div className="labelline">Name</div>
              </div>
            </div>

            <div className="register-container">
              <div
                className={`entryarea ${
                  isInputValid("email") ? "input-valid" : ""
                }`}
              >
                <input
                  value={formData.email}
                  type="text"
                  name="email"
                  onChange={changehandler}
                  required
                />
                <div className="labelline">Email</div>
              </div>
            </div>

            <div className="register-container">
              <div
                className={`entryarea ${
                  isInputValid("phone") ? "input-valid" : ""
                }`}
              >
                <input
                  value={formData.phone}
                  type="text"
                  name="phone"
                  onChange={changehandler}
                  required
                />
                <div className="labelline">Phone</div>
              </div>
            </div>

            <div className="register-container">
              <div
                className={`entryarea ${
                  isInputValid("company") ? "input-valid" : ""
                }`}
              >
                <input
                  value={formData.company}
                  type="text"
                  name="company"
                  onChange={changehandler}
                  required
                />
                <div className="labelline">company</div>
              </div>
            </div>

            <div className="register-container">
              <div
                className={`entryarea ${
                  isInputValid("password") ? "input-valid" : ""
                }`}
              >
                <input
                  value={formData.password}
                  type="text"
                  name="password"
                  onChange={changehandler}
                  required
                />
                <div className="labelline">password</div>
              </div>
            </div>
            <div className="register-agency-group">
              <label className="register-radio-question">
                Are you an Agency?*
              </label>
              <div className="register-radio-options">
                <label className="register-radio-item">
                  <input
                    type="radio"
                    name="agency"
                    value="yes"
                    checked={formData.agency === "yes"}
                    onChange={changehandler}
                    className="register-radio-input"
                  />
                  <span className="register-custom-radio"></span>
                  Yes
                </label>
                <label className="register-radio-item">
                  <input
                    type="radio"
                    name="agency"
                    value="no"
                    checked={formData.agency === "no"}
                    onChange={changehandler}
                    className="register-radio-input"
                  />
                  <span className="register-custom-radio"></span>
                  No
                </label>
              </div>
            </div>
          
          <button type="submit" className="register-submit-button">
            Create Account
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;

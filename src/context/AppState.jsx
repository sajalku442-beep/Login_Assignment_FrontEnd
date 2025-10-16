import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import axios from "axios";

const AppState = (props) => {
  const url = "https://login-assignment-api.onrender.com/api";
  const [token, setToken] = useState("");

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
    const tokenLocal = localStorage.getItem("token", token);
    if (tokenLocal) {
      setToken(tokenLocal);
    }
  }, [token]);

  const login = async (email, password) => {
    const api = await axios.post(
      `${url}/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log("result from login app state", api);
    setToken(api.data.token);
    return api;
  };
  const register = async (name, email, phone, company, password, agency) => {
    const api = await axios.post(
      `${url}/register`,
      {
        name,
        email,
        phone,
        company,
        password,
        agency,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log("register data froma app state", api);
    return api;
  };
  const profile = async () => {
    const api = await axios.get(
      `${url}/profile`,

      {
        headers: {
          "Content-Type": "application/json",
          Auth: token,
        },
        withCredentials: true,
      }
    );
    console.log("profile from app state", api);
    return api.data.user;
  };

  return (
    <AppContext.Provider value={{ login, register, profile, token }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;

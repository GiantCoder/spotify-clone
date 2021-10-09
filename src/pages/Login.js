import React from "react";
import "./Login.css";
import { loginUrl } from "../spotify";

const Login = () => {
  return (
    <div className="login">
      <img src="./spotify-logo.svg" alt="Spotify logo" />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
};

export default Login;

import React from "react";
import "./../Styles/Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="body">
      <div className="box">
        <div className="form-box">
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" />
              <i class="ri-user-fill"></i>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Password" />
              <i class="ri-lock-2-fill"></i>
            </div>
            <button className="submit">Login</button>
            <p>
              Don't Have an account?<Link to="/register">Create Account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

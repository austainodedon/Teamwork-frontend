import React from "react";

const Login = () => {
  return (
    <div>
      <h2>Sign in</h2>
      <p>Sign into your account</p>
      <form className="form">
        <div>
          <input type="email" placeholder="Email Address" name="email" />
        </div>
        <div>
          <input type="password" placeholder="Password" name="password" />
        </div>
      </form>
    </div>
  );
};
export default Login;

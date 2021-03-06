import React from "react";
import "./style.css";

const TRegister = () => {
  return (
    <div>
      <form>
        <div className="imgcontainer">
          <img src="img_avatar2.png" alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>

        <div className="container">
          <button type="button" class="cancelbtn">
            Cancel
          </button>

          <span class="psw">
            Forgot <a href="index.html">password?</a>
          </span>
        </div>
      </form>
    </div>
  );
};
export default TRegister;

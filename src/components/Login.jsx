import React from "react";
import UnisversalPtop from "./UnisversalPtop";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <section id="login">
      <UnisversalPtop pageName={"Login"} />
      <div className="login-container">
        <div className="login-con-left">
          <h3 style={{ fontWeight: "bold", marginBottom: "20px" }}>Login</h3>
          <form>
            <div>
              <input
                type="email"
                required
                placeholder="Username or email address*"
              />
            </div>
            <div>
              <input type="password" placeholder="Password*" required />
            </div>
            <div style={{ display: "flex", gap: "10px", cursor: "pointer" }}>
              <input
                type="checkbox"
                name=""
                id=""
                style={{ width: "20px", height: "20px" }}
              />
              <span>Remember me</span>
            </div>
            <div>
              <button className="login">LOGIN</button>
            </div>
          </form>
        </div>
        <div className="login-con-right">
          <h3>New Customer</h3>
          <span>
            Be part of our growing family of new customers! Join us today and
            unlock a world of exclusive benefits, offers, and personalized
            experiences.
          </span>
          <NavLink to={"/register"}>
            {" "}
            <button className="login">REGISTER</button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Login;

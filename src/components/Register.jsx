import React from "react";
import UnisversalPtop from "./UnisversalPtop";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Register = () => {
  return (
    <section id="register">
      <UnisversalPtop pageName={"Create An Account"} />
      <div className="register-container">
        <div className="login-container">
          <div className="login-con-left">
            <h3 style={{ fontWeight: "bold", marginBottom: "20px" }}>
              Register
            </h3>
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
              <div>
                <input
                  type="password"
                  placeholder="Confirm Password*"
                  required
                />
              </div>
              <div style={{ display: "flex", gap: "10px", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  style={{ width: "20px", height: "20px" }}
                />
                <span>I agree to the Terms of User</span>
              </div>
              <div>
                <button className="login">Register</button>
              </div>
            </form>
          </div>
          <div className="login-con-right">
            <h3>Already Have An Account?</h3>
            <span>
              Welcome back. Sign in to access your personalized experience,
              saved preferences, and more. We're thrilled to have you with us
              again!
            </span>
            <NavLink to={"/login"}>
              <button className="login">LOGIN</button>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Register;

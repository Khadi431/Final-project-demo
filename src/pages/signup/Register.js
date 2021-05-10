import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <section id="login-page">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="sign-in-container">
              <div className="signUp-form shadow">
                <h2 className="text-center pb-4">Sign Up</h2>
                <form autoComplete="off" className="mt-4">
                  <div className="form-group">
                    <label htmlFor="username">User name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Full name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      required
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn sign-in-btn w-100 text-white"
                    >
                      Sign In
                    </button>
                  </div>
                  <div>
                    Have Account <Link to="/login">sign in</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

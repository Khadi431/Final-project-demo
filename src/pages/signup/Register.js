import React from "react";
import {useState,useContext} from "react"
import { Link } from "react-router-dom";
import { userContext } from "../../contexts/userContext";
import "./Register.css";

const Register = () => {
    const { signUp } = useContext(userContext);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();

    function handleSubmit(e) {
      e.preventDefault();
      const signUpUser = {
        email,
        name,
        phone,
        password,
      };
      signUp(signUpUser);
    }

  return (
    <section id="login-page" onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="sign-in-container">
              <div className="signUp-form shadow">
                <h2 className="text-center pb-4">Sign Up</h2>
                <form autoComplete="off" className="mt-4">
                  <div className="form-group">
                    <label htmlFor="username"> Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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

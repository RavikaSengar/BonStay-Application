import React, { useState } from "react";
import BackgroundImage from "./BackgroundImage";
import { Link, useNavigate } from "react-router-dom";

function Login({ setLoggedIn }) {
  const [formLoginValue, setFormLoginValue] = useState({
    email: "",
    password: "",
    errorMessage: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();

  const validUser = {
    email: "ravikasengar@gmail.com",
    password: "ravika",
  };

  const handleLoginChange = (e) => {
    e.preventDefault();
    // const [value, name] = e.target;
    // setFormLoginValue({ ...formLoginValue, [value]: name });

    if (
      formLoginValue.email === validUser.email &&
      formLoginValue.password === validUser.password
    ) {
      setLoggedIn(true);
      navigate("/home");
    } else {
      setFormLoginValue({
        ...formLoginValue,
        errorMessage: "Invalid email or password",
      });
    }
  };

  const Validate = () => {
    const errorMsg = {};
    if (!formLoginValue.email.trim()) {
      errorMsg.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formLoginValue.email)) {
      errorMsg.email = "Invalid email format";
    }
    if (!formLoginValue.password.trim()) {
      errorMsg.password = "Password is required";
    } else if (formLoginValue.password.length < 8) {
      errorMsg.password = "password should be more than 8 letters";
    } else if (formLoginValue.password.length > 12) {
      errorMsg.password = "password should be less than 12 letters";
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <BackgroundImage />
      <div
        className="position-absolute top-50 start-50 translate-middle p-4 rounded shadow d-flex flex-column flex-md-row form-background"
        style={{ minWidth: "300px" }}
      >
        <form onSubmit={handleLoginSubmit} className="form">
          <h1 style={{ fontFamily: "cursive", color: "#b57862" }}>
            {" "}
            BonStay with Us
          </h1>
          {formLoginValue.errorMessage && (
            <div className="alert alert-danger">
              {formLoginValue.errorMessage}
            </div>
          )}
          <div className="mt-4">
            <label htmlFor="name">UserId:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={formLoginValue.email}
              onChange={(e) =>
                setFormLoginValue({ ...formLoginValue, email: e.target.value })
              }
              className=" input-field mt-1"
            />
          </div>
          {formErrors.name && <p style={{ color: "red" }}>{formErrors.name}</p>}
          <div>
            <label htmlFor="name">Password:</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={formLoginValue.password}
              onChange={(e) =>
                setFormLoginValue({
                  ...formLoginValue,
                  password: e.target.value,
                })
              }
              className=" input-field"
            />
          </div>
          {formErrors.name && <p style={{ color: "red" }}>{formErrors.name}</p>}
          <button className="input-field register-btn p-1"> Login</button>
          <div className="mt-4">
            <Link to="/RegistrationPage">Sign Up</Link> to create a new account.
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import HotelImg from "../Images/Hotel-Image.jpg";
import DoorImg from "../Images/Doors-with-leaves.jpg";
import BackgroundImage from "./BackgroundImage";
import { Link, Navigate, useNavigate } from "react-router-dom";

function RegistrationPage() {
  const [formRegValue, setFormRegValue] = useState({
    name: "",
    address: "",
    phoneNo: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();
  const handleRegChange = (e) => {
    setFormRegValue({ ...formRegValue, [e.target.name]: e.target.value });
  };

  const Validate = () => {
    const errorMsg = {};
    if (!formRegValue.name.trim()) {
      errorMsg.name = "Name is required";
    } else if (formRegValue.name.length < 3) {
      errorMsg.name = "Name should be more than 3 characters";
    }
    if (!formRegValue.address.trim()) {
      errorMsg.address = "Address is required";
    }
    if (!formRegValue.phoneNo.trim()) {
      errorMsg.phoneNo = "Phone No. is required";
    } else if (!/^\d{10}$/.test(formRegValue.phoneNo)) {
      errorMsg.phoneNo = "Phone number must be 10 digits only";
    }
    if (!formRegValue.email.trim()) {
      errorMsg.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formRegValue.email)) {
      errorMsg.email = "Invalid email format";
    }
    if (!formRegValue.password.trim()) {
      errorMsg.password = "Password is required";
    } else if (formRegValue.password.length < 8) {
      errorMsg.password = "password should be more than 8 letters";
    } else if (formRegValue.password.length > 12) {
      errorMsg.password = "password should be less than 12 letters";
    }
    return errorMsg;
  };

  const handleRegSubmit = (e) => {
    e.preventDefault();
    const newErrors = Validate();
    setFormErrors(newErrors);
    console.log(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Successful registred")
      navigate("/")
    }
    else{
      setFormErrors(newErrors)
    }
  };
  return (
    <div>
      <BackgroundImage />
      {/* Overlay Box */}
      <div
        className="position-absolute top-50 start-50 translate-middle p-4 rounded shadow d-flex flex-column flex-md-row form-background"
        style={{ minWidth: "800px" }}
      >
        {/* left-Image */}
        <div className="me-md-4 mb-4 mb-md-0" style={{ flex: 1 }}>
          <img
            src={DoorImg}
            alt="Side"
            className="img-fluid rounded"
            style={{
              height: "100%",
              maxHeight: "450px",
              objectFit: "cover",
              width: "100%",
            }}
          />
        </div>

        {/* Right Form */}
        <div style={{ flex: 1 }}>
          <form onSubmit={handleRegSubmit} className="form">
            <div>
              <label htmlFor="name">Name:</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                value={formRegValue.name}
                onChange={handleRegChange}
                className=" input-field mt-1"
              />
            </div>
            {formErrors.name && (
              <p style={{ color: "red" }}>{formErrors.name}</p>
            )}
            <div>
              <label htmlFor="name">Address:</label>
              <br />

              <input
                type="text"
                id="address"
                name="address"
                value={formRegValue.address}
                onChange={handleRegChange}
                className=" input-field"
              />
            </div>
            {formErrors.address && (
              <p style={{ color: "red" }}>{formErrors.address}</p>
            )}
            <div>
              <label htmlFor="name">Phone No:</label>
              <br />

              <input
                type="number"
                id="phoneNo"
                name="phoneNo"
                value={formRegValue.phoneNo}
                onChange={handleRegChange}
                className=" input-field"
              />
            </div>
            {formErrors.phoneNo && (
              <p style={{ color: "red" }}>{formErrors.phoneNo}</p>
            )}
            <div>
              <label htmlFor="name">Email Id:</label>
              <br />

              <input
                // type="email"
                id="email"
                name="email"
                value={formRegValue.email}
                onChange={handleRegChange}
                className=" input-field"
              />
            </div>
            {formErrors.email && (
              <p style={{ color: "red" }}>{formErrors.email}</p>
            )}
            <div>
              <label htmlFor="name">Password:</label>
              <br />

              <input
                type="password"
                id="password"
                name="password"
                value={formRegValue.password}
                onChange={handleRegChange}
                className=" input-field"
              />
            </div>
            {formErrors.password && (
              <p style={{ color: "red" }}>{formErrors.password}</p>
            )}
            <button className="input-field register-btn p-1"> Register</button>
            <div className="mt-4">
              <Link to="/">Login </Link> with your exsiting account
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HotelImg from '../Images/Hotel-Image.jpg';      // background image
import DoorImg from '../Images/Doors-with-leaves.jpg';  // image inside box

const OverlayForm = () => {
  return (
    <div
      className="position-relative"
      style={{
        backgroundImage: {HotelImg},
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
         <img
          src={HotelImg}
          className="card-img-top"
          alt="Bike 2"
          style={{ height: "max", objectFit: "cover" }}
        />
      {/* Overlay Box */}
      <div
        className="position-absolute top-50 start-50 translate-middle p-4 rounded shadow d-flex flex-column flex-md-row bg-white bg-opacity-75"
        style={{ maxWidth: '800px', width: '90%' }}
      >
        {/* Left Image */}
        <div className="me-md-4 mb-4 mb-md-0" style={{ flex: 1 }}>
          <img
            src={DoorImg}
            alt="Side"
            className="img-fluid rounded"
            style={{ height: '100%', maxHeight: '300px', objectFit: 'cover', width: '100%' }}
          />
        </div>

        {/* Right Form */}
        <div style={{ flex: 1 }}>
          <h4 className="mb-3 text-center">Login</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OverlayForm;

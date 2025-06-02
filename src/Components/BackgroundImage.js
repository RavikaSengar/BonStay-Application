import React from "react";
import HotelImg from "../Images/Hotel-Image.jpg"
function BackgroundImage() {
  return (
    <div>
      <div className="position-relative">
        <img
          src={HotelImg}
          className="card-img-top"
          alt="Bike 2"
          style={{ height: "100vh", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default BackgroundImage;

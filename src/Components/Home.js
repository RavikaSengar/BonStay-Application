import React from "react";
import BackgroundImage from "./BackgroundImage";
import QuoteImg from "../Images/BonStay-design.png"

function Home() {
  return (
    <div>
      <BackgroundImage />
      <div
        className="position-absolute top-50 start-50 translate-middle p-4 rounded shadow d-flex flex-column flex-md-row form-background"
        style={{ minWidth: "800px" }}
      >
        <img src={QuoteImg} alt="Quote from BonStay" />
      </div>
    </div>
  );
}

export default Home;

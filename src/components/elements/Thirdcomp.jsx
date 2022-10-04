import React from "react";
import "./thirdcomp.css";

const Thirdcomp = () => {
  return (
    <>
      <div className="container fourcomp">
        <div className="row">
          <div className="col-md-6 hero-right">
            <h2 className="fw-bold first-heading opacity-1 aos-animate" data-aos="fade-up"
     data-aos-duration="2000">
              Developers unleashed
            </h2>
            <p className="first-para pt-3 aos-animate" data-aos="fade-up"
     data-aos-duration="2000">
              Develop on Overledger without specialist blockchain knowledge.
            </p>
            <button className="hero-btn aos-animate" data-aos="fade-up"
     data-aos-duration="2000">
              <span>Find out more</span>
            </button>
          </div>

          <div className="col-md-6 hero-left">
            <img className="f-image" src="./assets/laptop.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Thirdcomp;

import React from "react";

const Fivecomp = () => {
  return (
    <>
      <div className="container fourcomp">
        <div className="row">
          <div className="col-md-6 hero-right">
            <h2
              className="fw-bold first-heading opacity-1  aos-animate"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Designed for the future
            </h2>
            <p
              className="first-para pt-3 aos-animate"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              With our blockchain-agnostic approach, your existing
              infrastructure investments are protected. And the door is open to
              future cross-platform applications.
            </p>
            <button
              className="hero-btn aos-animate"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <span>Find out more</span>
            </button>
          </div>

          <div className="col-md-6 hero-left">
            <img className="f-image" src="./assets/door.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fivecomp;

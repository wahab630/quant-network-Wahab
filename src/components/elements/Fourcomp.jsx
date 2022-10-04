import React from "react";

const Fourcomp = () => {
  return (
    <>
      <div className="container fourcomp">
        <div className="row">
          <div className="col-md-6 hero-left">
            <img className="f-image" src="./assets/bigdoor.svg" alt="" />
          </div>

          <div className="col-md-6 hero-right">
            <h2
              className="fw-bold first-heading opacity-1 aos-animate"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Built for enterprises
            </h2>
            <p
              className="first-para pt-3 aos-animate"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Led by an experienced team from large corporate, financial and
              regulatory institutions, we enable existing financial
              infrastructure to operate with new decentralised networks.
            </p>
            <button
              className="hero-btn aos-animate"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <span>Find out more</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fourcomp;

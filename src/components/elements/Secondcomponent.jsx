import React from "react";
import "./secondcomponent.css";

const Secondcomponent = () => {
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">

        <div className="col-md-6 hero-left">
            <img className="f-image" src="./assets/box.svg" alt="" />
          </div>

          <div className="col-md-6 hero-right">
            <h2 className="fw-bold first-heading opacity-1  aos-animate" data-aos="fade-up"
     data-aos-duration="2000">
              Interoperability solved
            </h2>
            <p className="first-para pt-3 aos-animate" data-aos="fade-up"
     data-aos-duration="2000">
              Reduce costs and access wider markets by deploying any app on any
              blockchain. That’s the power of our single, standard, multi-chain
              API.
            </p>
            <button className="hero-btn aos-animate" data-aos="fade-up"
     data-aos-duration="2000">
              <span>Find out more</span>
            </button>
          </div>

          

        </div>
      </div>
    </>
  );
};

export default Secondcomponent;

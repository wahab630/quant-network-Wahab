import React from "react";
import "./firstComponent.css";

const FirstComponent = () => {
  return (
    <>
      <div className="container fourcomp">
        <div className="row">
          <div className="col-md-6 hero-left pb-0 mx-0">
            <img className="f-image " src="./assets/firstpic.svg" alt="" />
          </div>

          <div className="col-md-6 hero-right">
            <h2
              className="fw-bold first-heading opacity-1  aos-animate"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Unlocking the power of blockchain for everyone
            </h2>
            <p
              className="first-para pt-3 aos-animate "
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              {" "}
              We deliver interoperable ecosystems and real-world solutions that
              lower costs, enable new business, and mitigate risk.
            </p>
            <button
              className="hero-btn aos-animate"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <span>Lets start</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstComponent;

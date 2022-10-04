import React from "react";
import "./picComponent.css";

const PicComponent = () => {
  return (
    <>
      <div className="container-fluid pic-component fourcomp">
        <div className="container pic-section   ">
          <div className="row">
            <div className="col-md-12">
              <h2 className=" fw-bold pic-h1  aos-animate " data-aos="fade-up"
     data-aos-duration="2000">
                An empowered, interconnected world
              </h2>
              <p className="pic-p1 fw-bold aos-animate " data-aos="fade-up"
     data-aos-duration="2000">
                We serve banks, asset managers and other financial institutions;
                <br />
                enterprises; and the technology partners and <br />
                fintech developers who support them.
              </p>

              <button className="hero-btn p-button aos-animate" data-aos="fade-up"
     data-aos-duration="2000">
                <span>Lets start</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PicComponent;

import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-t">
        <div className="row d-flex">
          <div className="col-md-6 hero-left  ">
            <div className="ps-5 ms-5">
              <h1 className="hero-heading">
                <span
                  className="hero-head fw-bold aos-animate  opacity-1"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  The future
                  <br />
                  of finance.
                </span>
                <span
                  className="h-para fw-bold aos-animate "
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Today.
                </span>
              </h1>
              <button
                className="hero-btn aos-animate"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <span>Get started</span>
              </button>
            </div>
          </div>

          <div className="col-md-6 hero-right">
            <video
              className="hero-vid"
              src="assets/hero-video.mp4"
              autoPlay
              muted
              loop
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

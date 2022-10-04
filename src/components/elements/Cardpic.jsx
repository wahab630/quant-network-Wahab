import React from "react";
import "./cardpic.css";

const Cardpic = () => {
  return (
    <>
      <div className="container picttp mt-5">
        <div className="row ">
          <div className="col ">
            <h1 className="first-heading fw-bold">Explore the future</h1>
            <p className="first-para pb-5 pt-2">
              Much of the financial world’s digital future <br />
              will be built on blockchain. Find out why.
            </p>
          </div>
        </div>
      </div>

      <div className="container imgcard">
        <div className="row">
          <div className="col-md-4 ms-auto cardonpic  my-5 px-0 ">
            <div className="card cardonpic">
              <div className="card-body my-5 mx-3">
                <small className="top">News</small>
                <small>3 October 2022</small>
                <h5 className="card-title fw-bold">Your guide to Sibos 2022</h5>
                <span class="badge card-badge me-2">
                  FINANCIAL INSTITUTIONS
                </span>
                <span class="badge card-badge me-2">PARTNERS</span>
                <span class="badge card-badge me-2">SIBOS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-3 ">
            <div className="card">
              <div className="card-body ">
                <small className="top">News</small>
                <small>3 October 2022</small>
                <h5 className="card-title fw-bold">
                  Martin Hargreaves on the benefits of <br /> CBDCs for <br />{" "}
                  consumers
                </h5>
                <span class="badge card-badge me-2">CBDC</span>
                <span class="badge card-badge me-2">CITYAM</span>
                <span class="badge card-badge me-2">ENTERPRISES</span>
              </div>
            </div>
          </div>

          <div className="col-md-3 ">
            <div className="card">
              <div className="card-body ">
                <small className="top">News</small>
                <small>3 October 2022</small>
                <h5 className="card-title fw-bold">
                  Gilbert Verdian <br /> explains The Merge
                </h5>
                <span class="badge card-badge me-2">BLOCKCHAIN</span>
                <span class="badge card-badge me-2">PARTNERS</span>
                <span class="badge card-badge me-2">SIBOS</span>
              </div>
            </div>
          </div>

          <div className="col-md-3 ">
            <div className="card">
              <div className="card-body ">
                <small className="top">News</small>
                <small>3 October 2022</small>
                <h5 className="card-title fw-bold">
                  The multi-chain <br /> future: sidechains, <br /> layer 2s and
                  The <br /> Merge
                </h5>
                <span class="badge card-badge me-2">ARCHITECTURE</span>
                <span class="badge card-badge me-2">ASSOCIATIONS</span>
                <span class="badge card-badge me-2">DEVELOPERS</span>
              </div>
            </div>
          </div>

          <div className="col-md-3 ">
            <div className="card">
              <div className="card-body ">
                <small className="top">News</small>
                <small>3 October 2022</small>
                <h5 className="card-title fw-bold">
                  Overledger 2.2.14 is <br /> an engineering <br /> release{" "}
                </h5>
                <span class="badge card-badge me-2">
                  FINANCIAL INSTITUTIONS
                </span>
                <span class="badge card-badge me-2">PARTNERS</span>
                <span class="badge card-badge me-2">SIBOS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardpic;

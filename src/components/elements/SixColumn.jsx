import React from "react";
import "./sixColumn.css";

const SixColumn = () => {
  return (
    <>
      <div className="container fourcomp">
        <div className="row">
          <div className="col-md-12 mb-4">
            <h1 className="fw-bold sixCol-heading opacity-1 aos-animate" data-aos="fade-up"
     data-aos-duration="2000">
              Create value, reduce <br /> costs, mitigate risk
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h5 className="fw-bold">Capital markets</h5>
            <p>
              Assets of all kinds – both physical and digital – are being
              tokenised. Issuers are gaining access to entire new pools of
              liquidity, while investors are diversifying their portfolios in
              ways they could only dream of just a few years ago.
            </p>
          </div>
          <div className="col-md-6">
            <h5 className="fw-bold">Compliance</h5>
            <p>
              Blockchain can make the analysis of transaction patterns easier
              for tax authorities, regulatory bodies and other responsible
              institutions. It can be used to simplify self-declarations,
              enforcement, or anti money laundering operations.
            </p>
          </div>
        </div>
        {/* 1st ends */}

        <div className="row">
          <div className="col-md-6 mb-4">
            <h5 className="fw-bold">Payments</h5>
            <p>
              Cross-border payments – whether in digital currencies or fiat
              currency – are more flexible and secure when handled over
              blockchain.
            </p>
          </div>
          <div className="col-md-6">
            <h5 className="fw-bold">Supply chain and trade finance</h5>
            <p>
              Blockchains are bringing clarity and certainty to areas such as
              procurement, logistics, provenance, customs and payments – helping
              to make notoriously complex global supply chains much more
              efficient.
            </p>
          </div>
        </div>
        {/* 2nd ends */}

        <div className="row">
          <div className="col-md-6">
            <h5 className="fw-bold">Digital currencies</h5>
            <p>
              Central banks across the world are investigating the adoption of
              digital currencies (CBDC), while commercial entities are issuing
              their own stablecoins – often to great acclaim.
            </p>
          </div>
          <div className="col-md-6">
            <h5 className="fw-bold">Insurance</h5>
            <p>
              By removing intermediaries, blockchain could completely transform
              the insurance industry with a wide range of use cases, from the
              optimisation of existing processes to the introduction of new
              business models.
            </p>
          </div>
        </div>
        {/* 3rd ends */}
      </div>
    </>
  );
};

export default SixColumn;

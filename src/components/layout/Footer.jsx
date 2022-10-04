import React from "react";
import "./footer.css";
import { FaTwitter,FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row f-top">
          <div className="col-md-2">
            <h5>WHO WE SERVE</h5>
            <ul className="list-unstyled">
              <li>Financial institutions</li>
              <li>Enterprises</li>
              <li>Partners</li>
              <li>Developers</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>WHAT WE DO</h5>
            <ul className="list-unstyled">
              <li>Digital currencies</li>
              <li>Payments</li>
              <li>Supply chain and trade finance</li>
              <li>Capital markets</li>
              <li>Compliance</li>
              <li>Insurance</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>HOW WE DO IT</h5>
            <ul className="list-unstyled">
              <li>Products</li>
              <li>- Overledger Integrate</li>
              <li>- Overledger Tokenise</li>
              <li>Networks</li>
              <li>Ecosystem</li>
              <li>- Developer programme</li>
              <li>- Partners</li>
              <li>- Associations</li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5>WHY IT MATTERS</h5>
            <ul className="list-unstyled">
              <li>All</li>
              <li>News</li>
              <li>Events</li>
              <li>Perspectives</li>
              <li>Research</li>
              <li>Use cases</li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5>ABOUT US</h5>
            <ul className="list-unstyled">
              <li>Mission and values</li>
              <li>Leadership</li>
              <li>Careers</li>
              <li>Media centre</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        {/*top end */}
        <hr />
        <div className="row b-footer py-5  my-5 ">
         
          <div className="col-md-6">
            <img
              className="logo-image"
              src="https://www.altcoinbuzz.io/wp-content/uploads/2021/01/quant-network-logo.jpg"
              alt=""
            />
            <br />
            <small className="smaller">© 2022 Quant Network Limited. All rights reserved.</small>
          </div>

          <div className="col-md-2">Privacy policy</div>
          <div className="col-md-2">Terms of use</div>
          <div className="col-md-2"><FaTwitter size={20}/> <FaLinkedin size={20}/> </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

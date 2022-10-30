import React from 'react'
import './header.css'


const Header = () => {
  return (
   <>
   <nav className="navbar navbar-contract-lg py-0 sticky-top">
  <div className="container">
    <a className="navbar-brand" href="no"> <img className='logo-image' src="assets/logo.png" alt="" /> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  mb-lg-0">

        <li className='nav-item active'>
          <a href="/" className='nav-link'>Who we serve</a>
          <div className='dropdown-content-one'>
          <li>Financial institutions</li>
          <li>Enterprises</li>
          <li>Partners</li>
          <li>  Developers</li>
          </div>         
        </li>

        <li className='nav-item active'>
          <a href="/" className='nav-link'>What we do</a>
          <div className='dropdown-content-one'>
          <li>Financial institutions</li>
          <li>Enterprises</li>
          <li>Partners</li>
          <li>  Developers</li>
          </div>         
        </li>

        <li className='nav-item active'>
          <a href="/" className='nav-link'>Why it matters</a>
          <div className='dropdown-content-one'>
          <li>Financial institutions</li>
          <li>Enterprises</li>
          <li>Partners</li>
          <li>  Developers</li>
          </div>         
        </li>

        <li className='nav-item active'>
          <a href="/" className='nav-link'>About us</a>
          <div className='dropdown-content-one'>
          <li>Financial institutions</li>
          <li>Enterprises</li>
          <li>Partners</li>
          <li>  Developers</li>
          </div>         
        </li>

        <li className='nav-item active'>
          <a href="/" className='nav-link'>Who we serve</a>
          <div className='dropdown-content-one'>
          <li>Financial institutions</li>
          <li>Enterprises</li>
          <li>Partners</li>
          <li>  Developers</li>
          </div>         
        </li>

     </ul>
      
    </div>
  </div>
</nav>
   </>
  )
}

export default Header
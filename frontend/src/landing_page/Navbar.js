import React from "react";
import {Link}from "react-router-dom";

function Navbar() {
  return (
<>

    <nav
      class="navbar navbar-expand-lg border-bottom"
      
    >
      <div class="container p-2 ">
       <div className="row">
        <div className="col-3"> <Link class="navbar-brand" to="/">
          <img
            src="media/images/equitylogo.png"
            style={{ width: "13rem",height:"5rem" }}
            alt="Logo"
          />
        </Link></div>
       </div>
      <div className="col-3"></div>
     <div className="col-6">   <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active mx-3 p-3" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active mx-3 p-3" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active mx-3 p-3" to="/product">
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active mx-3 p-3" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active mx-3 p-3" to="/support">
                  Support
                </Link>
              </li>
              
            </ul>
          </form>
        </div></div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
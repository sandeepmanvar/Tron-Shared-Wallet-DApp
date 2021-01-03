import React, { Fragment } from "react";

function NavBar(props) {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Shared Wallet App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active mr-2">
              <a className="nav-link btn btn-primary text-white" href="#">
                <i class="fas fa-sign-in-alt"></i>&nbsp;Login
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link btn btn-danger text-white" href="#">
                <i class="fas fa-sign-out-alt"></i>&nbsp;Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}

export default NavBar;

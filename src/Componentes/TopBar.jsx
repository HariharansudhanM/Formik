import React from "react";

function TopBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ height: "5rem" }}
    >
      <div className="container headerContainer">
        <div className="iconContainer">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#!">
              Home
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link active" href="#!">
              About
            </a>
          </li> */}

              <li className="nav-item "></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;

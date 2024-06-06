import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <label
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
        </label>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item">
          <Link className="nav-link" to={"/dashboard"}>
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span> My Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Interface</div>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to={"/createBook"}
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Create Book</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>
      </ul>
    </>
  );
}

export default SideBar;

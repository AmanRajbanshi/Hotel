import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-transparent bg-navarrbackground ">
        <div className="container-fluid">
          <Link className="navbar-brand d-lg-none" to="#">
            <img
              className="navbarImage"
              src="https://hotelasiatique.com.np/images/Home-1/sky-logo-header.png"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ color: "white" }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown ">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Rooms
                </Link>
                <ul className="dropdown-menu ">
                  <li>
                    <Link className="dropdown-item  textonhover" to="/rooms">
                      All Rooms
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item textonhover"
                      to="/standard_room"
                    >
                      Standard Room
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item textonhover"
                      to="/deluxe_room"
                    >
                      Deluxe Room
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item textonhover" to="/twin_room">
                      Twin Room
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item textonhover" to="/mini_room">
                      Mini Room
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reservation">
                  Reservation
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item dropdown ">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </Link>
                <ul className="dropdown-menu ">
                  <li>
                    <Link className="dropdown-item textonhover" to="/overview">
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item textonhover" to="/guestbook">
                      Guest Book
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faFolderOpen,
  faLayerGroup,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <img src="/images/navpic.jpg" alt="profilepic" />

        <ul>
          <li>
            <FontAwesomeIcon icon={faHouse} className="navbar-icons" />
            <Link to="/">Home</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} className="navbar-icons" />
            <Link to="/about">About</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faFolderOpen} className="navbar-icons" />
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faLayerGroup} className="navbar-icons" />
            <Link to="/services">Services</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} className="navbar-icons" />
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
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
            <a href="/">Home</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} className="navbar-icons" />
            <a href="/about">About</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faFolderOpen} className="navbar-icons" />
            <a href="/projects">Projects</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faLayerGroup} className="navbar-icons" />
            <a href="/services">Services</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} className="navbar-icons" />
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

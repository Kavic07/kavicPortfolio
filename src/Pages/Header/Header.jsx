// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <h2>
          I&nbsp;am&nbsp;Famuti&nbsp;Blessing<br></br>
          <span>A</span>&nbsp;<span>F</span>
          <span>r</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>-</span>
          <span>e</span>
          <span>n</span>
          <span>d</span>&nbsp;<span>D</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
        </h2>
        <div className="header-icons">
          <a href="https://github.com/Kavic07">
            <FontAwesomeIcon icon={faGithub} className="media-icon" />
          </a>
          <a href="linkedin.com/in/blessing-famuti-ayodele-93a995245">
            <FontAwesomeIcon icon={faLinkedinIn} className="media-icon" />
          </a>
          <a href="https://medium.com/@kavic07">
            <FontAwesomeIcon icon={faMedium} className="media-icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;

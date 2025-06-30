// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import "./Home.css";

const developerText = "Frontend Developer";

const Home = () => {
  return (
    <div className="header-container">
      <h2>
        I&nbsp;am&nbsp;Famuti&nbsp;Blessing<br></br>
        {developerText.split("").map((char, index) => (
          <span
            key={index}
            className="letter"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>
      <div className="header-icons">
        <a
          href="https://github.com/Kavic07"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="media-icon" />
        </a>
        <a
          href="linkedin.com/in/blessing-famuti-ayodele-93a995245"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="media-icon" />
        </a>
        <a
          href="https://medium.com/@kavic07"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faMedium} className="media-icon" />
        </a>
      </div>
    </div>
  );
};

export default Home;

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import "./About.css";

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const h2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (h2Ref.current) {
      observer.observe(h2Ref.current);
    }

    return () => {
      if (h2Ref.current) {
        observer.unobserve(h2Ref.current);
      }
    };
  }, []);

  return (
    <>
      <div className="about-container">
        <h2 ref={h2Ref} className={isInView ? "underline" : ""}>
          About
        </h2>

        <div className="text-container">
          <img src="/images/navpic.jpg" alt="about-pic" />

          <div className="text-content">
            <h3>Get to Know the Face Behind the Code</h3>
            <p className="subhead">
              Welcome! This section offers insights into who I am, my
              professional pursuits, and my current expertise, primarily focused
              on programming and technology. Explore to learn more about my
              journey, skills, and projects
            </p>

            <p className="paragraph">
              I&apos;m a passionate and dedicated Frontend developer which excel
              in creating engaging, functional user-friendly web interfaces. I
              stay updated on industry trends and technologies to continually
              refine my skills. I thrive in dynamic environments, tackling
              challenges with creativity and precision. Dedicated to delivering
              high-quality results, I bring a passion for design and development
              to every project.
            </p>
          </div>
        </div>

        <div className="skills-container">
          <h3>My Skills</h3>
          <div className="skills-content">
            <p>
              <FontAwesomeIcon icon={faHtml5} />
              <span>HTML</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faCss3Alt} />
              <span>CSS</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faJs} />
              <span>JavaScript</span>
            </p>
            <p>
              {" "}
              <svg
                width={14}
                height={15}
                fill="#ffffff"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#083463"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>TypeScript icon</title>
                  <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z"></path>
                </g>
              </svg>
              <span>TypeScript</span>
            </p>

            <p>
              <FontAwesomeIcon icon={faReact} />
              <span>React</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faGit} />
              <span>Git</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faGears} />
              <span>APIs</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

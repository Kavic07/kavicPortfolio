// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faBugSlash,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import "./Services.css";

const Services = () => {
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
      <div className="service-container">
        <h2 ref={h2Ref} className={isInView ? "underline" : ""}>
          Services
        </h2>
        <div className="service-content">
          <div className="service-item">
            <FontAwesomeIcon icon={faDesktop} className="service-icon" />
            <h4>Website Development & Application</h4>
            <p>
              I develop custom web applications tailored to specific business
              needs, ensuring scalability, maintainablity and optimize for
              performance and user experience.
            </p>
          </div>

          <div className="service-item">
            <FontAwesomeIcon icon={faBugSlash} className="service-icon" />
            <h4>Testing and Debugging</h4>
            <p>
              I perform unit and integration testing. Also debug and fix issues
              across various browsers and devices.
            </p>
          </div>

          <div className="service-item">
            <FontAwesomeIcon icon={faSearchengin} className="service-icon" />
            <h4>SEO Optimization</h4>
            <p>
              I implement best practices for on-page SEO and optimize meta tags,
              heading and structured data.
            </p>
          </div>

          <div className="service-item">
            <FontAwesomeIcon icon={faDatabase} className="service-icon" />
            <h4>Integration with Backend services</h4>
            <p>
              I connect frontend application with backend APIs and handle data
              fetching, authentication and real-time updates.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

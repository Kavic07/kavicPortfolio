/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import "./Project.css";

const Project = () => {
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
      <div className="project-container">
        <div className="project-content">
          <h2 ref={h2Ref} className={isInView ? "underline" : ""}>
            Projects
          </h2>
          <p>
            Explore my project portfolio to see how I bring ideas to life
            through innovative frontend development
          </p>
          <div className="project-images">
            <a href="https://blezynart.netlify.app/" target="_blank">
              <img src="./images/blezynart.png" alt="art-website" />
            </a>
            <a href="https://sabi-evote.vercel.app/" target="_blank">
              <img src="./images/evote.png" alt="blog" />
            </a>
            <a href="https://kavicblog.netlify.app/" target="_blank">
              <img src="./images/blog.png" alt="blog" />
            </a>
            <a href="https://blezynart.netlify.app/" target="_blank">
              <img src="./images/blezynart.png" alt="art-website" />
            </a>
            <a href="https://blezynart.netlify.app/" target="_blank">
              <img src="./images/blezynart.png" alt="art-website" />
            </a>
            <a href="https://kavicblog.netlify.app/" target="_blank">
              <img src="./images/blog.png" alt="blog" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

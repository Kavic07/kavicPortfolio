/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import "./Project.css";
import blezynart from "../../assets/blezynart.png";
import evote from "../../assets/evote.png";
import vuecakes from "../../assets/vuecakes.png";
import animeweb from "../../assets/kahvikanime.png";
import blog from "../../assets/blog.png";

const projects = [
  {
    name: "Blezyn Art",
    image: blezynart,
    url: "https://blezyn-art.vercel.app/",
  },
  {
    name: "E-vote",
    image: evote,
    url: "https://sabi-evote.vercel.app/",
  },
  {
    name: "Vue Cakes",
    image: vuecakes,
    url: "https://vuecakes.netlify.app/",
  },
  {
    name: "Anime web",
    image: animeweb,
    url: "https://blezynart.netlify.app/",
  },
  {
    name: "Kavic Blog",
    image: blog,
    url: "https://kavicblog.netlify.app/",
  },
];

const Project = () => {
  const [isInView, setIsInView] = useState(false);
  const h2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (h2Ref.current) observer.observe(h2Ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="project-container">
      <div className="project-content">
        <h2 ref={h2Ref} className={isInView ? "underline" : ""}>
          Projects
        </h2>
        <p>
          Explore my project portfolio to see how I bring ideas to life through
          innovative frontend development
        </p>
        <div className="project-images">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project.image} alt={project.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

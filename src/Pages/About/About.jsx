// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import navpic from "../../assets/navpic.jpg";
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
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (h2Ref.current) observer.observe(h2Ref.current);
    return () => observer.disconnect();
  }, []);

  const skillList = [
    { icon: faHtml5, label: "HTML" },
    { icon: faCss3Alt, label: "CSS" },
    { icon: faJs, label: "JavaScript" },
    { icon: faReact, label: "React" },
    { icon: faGit, label: "Git" },
    { icon: faGithub, label: "GitHub" },
    { icon: faGears, label: "API" },
  ];

  const svgSkills = [
    {
      label: "Tailwind",
      icon: (
        <svg
          width={15}
          height={16}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
        >
          <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" />
        </svg>
      ),
    },
    {
      label: "TypeScript",
      icon: (
        <svg
          width={14}
          height={15}
          viewBox="0 0 24 24"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865...Z" />
        </svg>
      ),
    },
    {
      label: "NextJS",
      icon: (
        <svg
          width={14}
          height={15}
          fill="#ffffff"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041...Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="about-container">
      <h2 ref={h2Ref} className={isInView ? "underline" : ""}>
        About
      </h2>

      <div className="text-container">
        <img src={navpic} alt="about-pic" />

        <div className="text-content">
          <h3>Get to Know the Face Behind the Code</h3>
          <p className="subhead">
            Welcome! This section offers insights into who I am, my professional
            pursuits, and my current expertise, primarily focused on programming
            and technology. Explore to learn more about my journey, skills, and
            projects.
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
          {skillList.map(({ icon, label }) => (
            <p key={label}>
              <FontAwesomeIcon icon={icon} />
              <span>{label}</span>
            </p>
          ))}

          {svgSkills.map(({ icon, label }) => (
            <p key={label}>
              {icon}
              <span>{label}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

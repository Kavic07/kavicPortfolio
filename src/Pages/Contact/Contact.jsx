// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
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

  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   message: "",
  // });

  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-undef
      const response = await axios.post(
        "http://localhost:5000/api/send-email",
        formData
      );
      alert(response.data.message);
      setFormData(initialFormData); //clear the form after successful submission
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    }
  };

  return (
    <>
      <div className="contact-container">
        <h2 ref={h2Ref} className={isInView ? "underline" : ""}>
          Contact Me
        </h2>
        <div className="contact-wrapper">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="form-name">
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <br></br>
                <input
                  type="text"
                  className="form-f"
                  id="firstName"
                  name="firstName"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <br></br>
                <input
                  type="text"
                  className="form-f"
                  id="lastName"
                  name="lastName"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <br></br>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <br></br>
              <textarea
                className="form-control"
                id="message"
                name="message"
                onChange={handleChange}
                rows="7"
                required
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Contact info</h3>
            <p>
              <FontAwesomeIcon icon={faLocationDot} className="contact-icons" />
              <span>Shitu Str, Felele Junct. Ibadan, Oyo State</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="contact-icons" />
              <span>+234&#40;803&#41;213-2864</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="contact-icons" />
              <span>blessingfamutis@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

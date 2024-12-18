import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css"; // If there's a CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_ourshoes", 
        "template_5uyvf6i", 
        {
          name: formData.name,
          from_email: formData.email, 
          message: formData.message,
        },
        "jyazGJ2NCkvXn9IBl" 
      )
      .then(
        () => {
          setStatus("Email sent successfully!");
          setFormData({ name: "", email: "", message: "" }); 
        },
        (error) => {
          setStatus("Failed to send email: " + error.text); 
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
    >
      <div className="contact-page">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <div className="contact-item">
            <FaPhone className="icon" />
            <span>+62 877-4628-8262</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>ourshoes321@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>Jl. Makam No.110, Bekasi</span>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send
            </button>
          </form>
          {status && <p className="status">{status}</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

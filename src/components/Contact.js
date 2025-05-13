import React, { useMemo } from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const position = useMemo(() => [18.675044733842658, 73.892383951391], []);
  const locationIcon = L.divIcon({
    className: "custom-marker",
    html: "<span style='font-size: 30px;'>📍</span>",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const [state, handleSubmit] = useForm("mdkgpzde"); // Replace with your actual Formspree form ID

  return (
    <section className="contact">
      <h2 className="contact-header">Contact</h2>

      {/* Contact Details */}
      <motion.div
        className="contact-details"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p>Feel free to reach out via any of the platforms below.</p>

        <div className="contact-box-container">
          <div className="contact-box">
            <FaMapMarkerAlt className="icon" aria-label="Location" />
            <span>Pune, Maharashtra, India</span>
          </div>
          <div className="contact-box">
            <FaPhone className="icon" aria-label="Phone" />
            <a href="tel:+919325866943">+91 9325866943</a>
          </div>
          <div className="contact-box">
            <SiGmail className="icon gmail-icon" aria-label="Gmail" />
            <a
              href="mailto:dhawalturkar@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhawalturkar@gmail.com
            </a>
          </div>
        </div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/dhawal-turkar-7bb8b325b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="social-icon linkedin" />
          </a>
          <a
            href="https://www.instagram.com/dhawal__turkar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="social-icon instagram" />
          </a>
          <a
            href="https://wa.me/919325866943"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="social-icon whatsapp" />
          </a>
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        className="contact-form-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {state.succeeded ? (
          <p style={{ color: "green", fontSize: "1.2rem" }}>
            Thanks for reaching out! I’ll get back to you soon.
          </p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="form-input"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="form-textarea"
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" className="form-button" disabled={state.submitting}>
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </motion.div>

      {/* Map Section */}
      <motion.div
        className="map-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={locationIcon}>
            <Popup>You can find me here! 📍</Popup>
          </Marker>
        </MapContainer>
      </motion.div>
    </section>
  );
};

export default Contact;

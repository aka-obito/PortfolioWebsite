import React from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhone,FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { SiGmail } from "react-icons/si";


// Replace with your actual latitude & longitude
const position = [18.675044733842658, 73.892383951391];

const locationIcon = L.divIcon({
    className: "custom-marker", // Custom styling
    html: "<span style='font-size: 30px;'>📍</span>", // Increased size
    iconSize: [40, 40], // Bigger size
    iconAnchor: [20, 40], // Adjusted anchor to center correctly
  });

const Contact = () => {
  return (
    <section className="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Contact Me</h1>
        <p>Feel free to reach out via any of the platforms below.</p>

        <div className="contact-details">
          <div className="contact-box">
            <FaMapMarkerAlt className="icon" />
            <span>Pune, Maharashtra, India</span>
          </div>
          <div className="contact-box">
            <FaPhone className="icon" />
            <a href="tel:+919325866943">+91 9325866943</a>
          </div>
          <div className="contact-box">
            <SiGmail className="icon gmail-icon" />
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dhawalturkar@gmail.com" target="_blank" rel="noopener noreferrer">dhawalturkar@gmail.com</a>
        </div>

          {/* Social Media Links */}
          <div className="social-links">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon linkedin" />
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon instagram" />
            </a>
            <a href="https://wa.me/919325866943" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="social-icon whatsapp" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Map Section */}
      <div className="map-container">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={locationIcon} >
            <Popup>You can find me here! 📍</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Contact;

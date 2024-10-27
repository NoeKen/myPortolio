"use client";
import { Typography } from "@mui/material";
import { useState } from "react";

import "./contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to send the form data to your backend
    console.log(formData);
    setOpenSnackbar(true);
    setFormData({ name: "", email: "", message: "" }); // Clear the form after submission
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <header className="contact-header">
        <h1>Contactez-nous</h1>
      </header>

      <div className="container">
        {/* <h1>Contactez-nous</h1> */}
        <Typography
          style={{
            color: "#",
            fontSize: 16,
            fontWeight: "lighter",
            fontFamily: "roboto",
            paddingLeft: "15%",
            paddingRight: "15%",
            marginBottom: 10,
            // maxWidth: '70%',
            textAlign: "center",
          }}
        >
          Si vous avez des questions ou des suggestions, n&apos;hésitez pas à
          nous contacter via ce formulaire.
        </Typography>

        <form onSubmit={handleSubmit} className="form">
          <div className="formGroup">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>

          <button type="submit" className="submitButton">
            Envoyer
          </button>
        </form>
        {/* {success === true && <p className="thankYouMessage">
            Merci pour votre message. Nous vous répondrons sous peu.
          </p>}
        {success === false && (
          <Typography
            style={{
              color: "red",
            }}
          >
            Erreur lors de l&apos;envoi du message.
          </Typography>
        )} */}
      </div>
    </>
  );
};

export default Contact;

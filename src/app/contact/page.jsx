"use client";
import { Box, Button, Grid2, Input, Typography } from "@mui/material";
import { useState } from "react";

// import "./contact.css";
import theme from "../[constants]/theme";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const [openSnackbar, setOpenSnackbar] = useState(false);

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

  // const handleCloseSnackbar = () => {
  //   setOpenSnackbar(false);
  // };

  return (
    <>
    <div id="contact"/>
      <Box
        sx={{
          bgcolor: theme.colors.bg,
          paddingRight: 3,
          paddingLeft: 3,
          pt: 2,
          mt: 4,
          pb: 5,
        }}
        // style={{
        //   flex: 1,
        //   // width: "90%",
        //   backgroundColor: "#f9f9f9",
        //   paddingRight: 80,
        // }}
      >
        {/* <header className="contact-header">
        <h3>Contactez-nous</h3>
      </header> */}

        {/* <Grid2 container spacing={2}> */}
          <Grid2
            item
            size={{ xs: 12, sm: 6, md: 6, xl: 6 }}
            sx={{
              // bgcolor: "red",
              // justifyContent: "center",
              alignContent: "space-evenly",
            }}
          >
            {/* <div className="container"> */}
            {/* <h1>Contactez-nous</h1> */}
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              sx={{ fontFamily: theme.fonts.main, mb: 5 }}
            >
              CONTACTEZ-MOI
            </Typography>
            <Typography
              style={{
                color: "#",
                fontSize: 16,
                fontWeight: "lighter",
                // fontFamily: theme.fonts.main,
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              Il me fera plaisir de vous répondre.
            </Typography>
            <Typography
              style={{
                color: "#",
                fontSize: 16,
                fontWeight: "bold",
                // fontFamily: theme.fonts.main,
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              kenfackaurel1@gmail.com
            </Typography>
            <Typography
              style={{
                color: "#",
                fontSize: 16,
                fontWeight: "lighter",
                // fontFamily: theme.fonts.main,
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              +1 (263) 880-7662
            </Typography>
          </Grid2>
          {/* <Grid2 item size={{ xs: 12, sm: 6, md: 6, xl: 6 }}>
            <form onSubmit={handleSubmit} className="form">
              <div className="formGroup">
                <Typography htmlFor="name">
                  Nom <span style={{ color: "red" }}>*</span>
                </Typography>
                <Input
                  fullWidth
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Entrez votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formGroup">
                <Typography htmlFor="email" sx={{ mt: 2 }}>
                  Email <span style={{ color: "red" }}>*</span>
                </Typography>
                <Input
                  fullWidth
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Entrez votre adresse email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formGroup">
                <Typography htmlFor="tel" sx={{ mt: 2 }}>
                  Téléphone
                </Typography>
                <Input
                  fullWidth
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Entrez votre numéro de téléphone"
                  value={formData.tel}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formGroup">
                <Typography htmlFor="objet" sx={{ mt: 2 }}>
                  Objet <span style={{ color: "red" }}>*</span>
                </Typography>
                <Input
                  fullWidth
                  type="text"
                  id="objet"
                  name="Objet"
                  placeholder="Entrez la raison de votre message"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formGroup">
                <Typography htmlFor="message" sx={{ mt: 2 }}>
                  Message
                </Typography>
                <Input
                  fullWidth
                  multiline
                  id="message"
                  name="message"
                  placeholder="Entrez votre message "
                  value={formData.message}
                  onChange={handleChange}
                  minRows={3}
                  maxRows="5"
                  required
                />
              </div>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ bgcolor: theme.colors.primary, mt: 3 }}
              >
                Envoyer
              </Button>
            </form>
            {/* {success === true && <p className="thankYouMessage">
            Merci pour votre message. Nous vous répondrons sous peu.
          </p>}
          </Grid2> */}
        {/* {success === false && (
          <Typography
            style={{
              color: "red",
            }}
          >
            Erreur lors de l&apos;envoi du message.
          </Typography>
        )} */}
            {/* </div> */}
        {/* </Grid2> */}
      </Box>
    </>
  );
};

export default Contact;

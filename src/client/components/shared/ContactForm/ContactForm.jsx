import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../ContactForm/ContactForm.css";
import { Button } from "@mui/material";

export default function ContactForm() {
  const formRef = useRef();
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const pubKeyID = process.env.REACT_APP_PUBLIC_KEY;

  const initialState = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);

  const isInvalid =
    formData.name === "" ||
    formData.email === "" ||
    formData.phone === "" ||
    formData.message === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, formRef.current, pubKeyID).then(
      (result) => {
        // console.log(result);
      },
      (error) => {
        // console.log(error);
      }
    );
    e.target.reset();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form ref={formRef} method="post" onSubmit={handleSubmit}>
      <div className="container">
        <div className="brand-logo"></div>
        <div className="brand-title">Kontakt os</div>
        <div className="subtext">
          Har du spørgsmål eller ønsker du et uforpligtende tilbud eller andet,
          så kontakt os på tlf. +45 42 94 13 44. Du kan også sende en e-mail
          eller udfylde kontaktformularen, så tager vi kontakt til dig.
        </div>
        <div className="inputs">
          <input
            name="name"
            className="input"
            type="text"
            placeholder="Dit navn *"
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            className="input"
            type="tel"
            placeholder="Dit telefonnummer *"
            onChange={handleChange}
            required
          />
          <textarea
            name="email"
            className="input"
            type="email"
            placeholder="Din email, example@mail.com  *"
            onChange={handleChange}
            required
          />
          <input
            name="message"
            className="input"
            type="textarea"
            placeholder="Beskrivelse af arbejdet  *"
            onChange={handleChange}
            required
          />
          {isInvalid ? (
            <Button
              disabled={isInvalid}
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              style={{ backgroundColor: "#0e7eb4" }}
            >
              Send Besked
            </Button>
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              style={{ backgroundColor: "#0e7eb4" }}
            >
              Send Besked
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}

import "./ContactButton.css";
import { ImCross } from "react-icons/im";

import { useState } from "react";

const ContactButton = () => {
  const [closeContactForm, setCloseContactForm] = useState(true);
  const [isFocus, setIsFocus] = useState("contact-button__input-name");

  const openContactForm = () => {
    setCloseContactForm(false);
    document.body.style.overflow = "hidden";
  };

  const closeContact = () => {
    setCloseContactForm(true);
    document.body.style.overflow = "auto";
  };

  return (
    <div id="ContactForm">
      <div className={closeContactForm ? "contact-form close" : "contact-form"}>
        <form id="mainForm" action="Submit">
          <label className="mainFormLabel" htmlFor="">
            <div
              className="border-blue"
              style={{
                left: isFocus === "contact-button__input-name" ? "0" : "-100%",
              }}
            ></div>
            <input
              id="contact-button__input-name"
              autoFocus
              className="mainFormInput"
              placeholder="Nombre o apellido"
              type="text"
              required
              onFocus={(e) => {
                setIsFocus(e.target.id);
              }}
            ></input>
          </label>
          <label className="mainFormLabel" htmlFor="">
            <div
              className="border-blue"
              style={{
                left: isFocus === "contact-button__input-email" ? "0" : "-100%",
              }}
            ></div>
            <input
              id="contact-button__input-email"
              className="mainFormInput"
              placeholder="Email"
              type="email"
              required
              onFocus={(e) => {
                setIsFocus(e.target.id);
              }}
            ></input>
          </label>

          <label className="mainFormLabel" htmlFor="">
            <div
              className="border-blue"
              style={{
                left: isFocus === "contact-button__input-cel" ? "0" : "-100%",
              }}
            ></div>
            <input
              id="contact-button__input-cel"
              className="mainFormInput"
              placeholder="Celular"
              type="tel"
              required
              onFocus={(e) => {
                setIsFocus(e.target.id);
              }}
            ></input>
          </label>

          <label className="mainFormLabel" htmlFor="">
            <div
              className="border-blue"
              style={{
                left: isFocus === "contact-button__input-msg" ? "0" : "-100%",
              }}
            ></div>
            <input
              id="contact-button__input-msg"
              className="mainFormInput"
              placeholder="Dejanos tu mensaje"
              required
              onFocus={(e) => {
                setIsFocus(e.target.id);
              }}
            />
          </label>

          <span id="btnSubmitForm" className="main-btn">
            <span>Empezar ya</span>
          </span>
        </form>
        <ImCross onClick={closeContact}>x</ImCross>
      </div>

      <span
        className="main-btn"
        onClick={() => {
          openContactForm();
        }}
      >
        <span>Contactate con el asesor</span>
      </span>
    </div>
  );
};

export default ContactButton;

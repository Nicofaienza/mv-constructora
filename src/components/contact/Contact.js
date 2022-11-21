import { useEffect, useState } from "react";
import "./contact.css";

const Contact = () => {
  const [isFocus, setIsFocus] = useState("contact__input-name");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="contact">
      <div id="contact__form">
        <div id="contact__form-container">
          <h2 id="form__title">Confía en nuestra experiencia.</h2>
          <div id="form">
            <a id="form__second-title">#CONTACTO</a>
            <form id="mainForm-contact" action="Submit">
              <label className="mainFormLabel-contact" htmlFor="">
                <div
                  className="border-blue"
                  style={{
                    left: isFocus === "contact__input-name" ? "0" : "-100%",
                  }}
                ></div>
                <input
                  id="contact__input-name"
                  autoFocus
                  className="mainFormInput-contact"
                  placeholder="Nombre o apellido"
                  type="text"
                  required
                  onFocus={(e) => {
                    console.log("id: ", e.target.id);
                    setIsFocus(e.target.id);
                  }}
                ></input>
              </label>
              <label className="mainFormLabel-contact" htmlFor="">
                <div
                  className="border-blue"
                  style={{
                    left: isFocus === "contact__input-email" ? "0" : "-100%",
                  }}
                ></div>
                <input
                  id="contact__input-email"
                  className="mainFormInput-contact"
                  placeholder="Email"
                  type="email"
                  required
                  onFocus={(e) => {
                    console.log("id: ", e.target.id);
                    setIsFocus(e.target.id);
                  }}
                ></input>
              </label>

              <label className="mainFormLabel-contact" htmlFor="">
                <div
                  className="border-blue"
                  style={{
                    left: isFocus === "contact__input-cel" ? "0" : "-100%",
                  }}
                ></div>
                <input
                  id="contact__input-cel"
                  className="mainFormInput-contact"
                  placeholder="Celular"
                  type="tel"
                  required
                  onFocus={(e) => {
                    console.log("id: ", e.target.id);
                    setIsFocus(e.target.id);
                  }}
                ></input>
              </label>

              <label className="mainFormLabel-contact" htmlFor="">
                <div
                  className="border-blue"
                  style={{
                    left: isFocus === "contact__input-msg" ? "0" : "-100%",
                  }}
                ></div>
                <input
                  id="contact__input-msg"
                  className="mainFormInput-contact"
                  placeholder="Dejanos tu mensaje"
                  required
                  onFocus={(e) => {
                    console.log("id: ", e.target.id);
                    setIsFocus(e.target.id);
                  }}
                />
              </label>

              <span className="main-btn">
                <span>Empezar ya</span>
              </span>
            </form>
          </div>
        </div>
      </div>

      <div id="contact__info">
        <span className="contact__second-title">#CONTACTO</span>
        <h2 id="contact__title">¡Contactate con nosotros!</h2>
        <div id="contact__info-text">
          <div id="contact__column__1">
            <span className="contact__second-title">TELÉFONO</span>
            <span className="contact__text">Atención al cliente</span>
            <span className="contact__text2">+54 (223) 000-0000</span>
            <span className="contact__text">Administración</span>
            <span className="contact__text2">+54 (223) 000-0000</span>
            <span className="contact__second-title">MAIL</span>
            <span className="contact__text2">contacto@mvconstructora.com</span>
          </div>
          <div id="contact__column__2">
            <span className="contact__second-title">DIRECCIÓN</span>
            <span className="contact__text">Oficina</span>
            <span className="contact__text2">Rawson 1857</span>
            <span className="contact__text2">
              Mar del Plata - Bs. As. Argentina
            </span>
            <span className="contact__second-title">HORARIOS</span>
            <span className="contact__text">Lunes a viernes</span>
            <span className="contact__text2">09:00 - 20:00</span>
            <span className="contact__text">Sábado</span>
            <span className="contact__text2">09:00 - 14:00</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

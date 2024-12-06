import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from '@emailjs/browser';

import {
  faPhone,
  faLocationArrow,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
const initialState = {
  name: "",
  email: "",
  message: "",
};
import { useTranslation } from 'react-i18next'
import JsonData from "../../data/data.json";

const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const { t, i18n } = useTranslation()
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(
        "service_ifhwkdj",
        "template_6xh0cvd",
        e.target,
        {publicKey: 'jIdYTI-Bh2WTdNGGD'}
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="landing__contact--base section">

      <div id="contact">
        <h2>
          {t("app.titles.footer")}</h2>
        <div className="row">
          <div className="col-md-8">
            <div className="contact__main--base">
              <div className="contact__title--base">
                {t("app.footer.description")}
              </div>
              <form name="sentMessage" validate="" onSubmit={handleSubmit}>
                <div className="row contact__input-row--base">
                  <div className="form-group contact__input--base">
                    <label htmlFor="name"> {t("app.footer.input.name")}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group contact__input--base">
                    <label htmlFor="email"> {t("app.footer.input.email")}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message"> {t("app.footer.input.message")}</label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="6"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button
                  type="submit"
                  className="btn-custom contact__button--base"
                >
                  {t("app.footer.button")}
                </button>
              </form>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <h3>{t("app.footer.info")}</h3>
              <p>
                <span>
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    className="fa"
                  ></FontAwesomeIcon>{" "}
                  {t("app.footer.address")}
                </span>
                {landingPageData.Contact ? landingPageData.Contact.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="fa fa-phone"
                  ></FontAwesomeIcon>{" "}
                  {t("app.footer.phone")}
                </span>{" "}
                {landingPageData.Contact ? landingPageData.Contact.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <FontAwesomeIcon
                    icon={faEnvelopeOpen}
                    className="fa fa-envelope-o"
                  ></FontAwesomeIcon>{" "}
                  {t("app.footer.email")}
                </span>{" "}
                <a href="mailto:esteban.salom@gmail.com">
                  {landingPageData.Contact ? landingPageData.Contact.email : "loading"}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="row">
            <div className="social">
              <ul>
                <li>
                  <a target="_blank" href={landingPageData.Contact ? landingPageData.Contact.github : "/"}>
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="fa"
                    ></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href={landingPageData.Contact ? landingPageData.Contact.linkedin : "/"}
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="fa"
                    ></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href={landingPageData.Contact ? landingPageData.Contact.whatsapp : "/"}
                  >
                    <FontAwesomeIcon
                      icon={faWhatsappSquare}
                      className="fa"
                    ></FontAwesomeIcon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

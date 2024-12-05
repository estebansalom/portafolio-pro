import { useState } from "react";
import emailjs from "emailjs-com";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(
        "service_i2jqsja",
        "template_qgclajl",
        e.target,
        "user_ILIpR7l6aN7HnbwOQkHhO"
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
    <div id="contact">
      <h2>
      {t("app.titles.footer")}</h2>
      <div className="row">
        <div className="col-md-8">
          <div className="contact__main--base">
            <div className="contact__title--base">
            {t("app.footer.description")}
            </div>
            <form name="sentMessage" validate onSubmit={handleSubmit}>
              <div className="row contact__input-row--base">
                <div className="form-group contact__input--base">
                  <label for="name"> {t("app.footer.input.name")}</label>
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
                <label for="email"> {t("app.footer.input.email")}</label>
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
              <label for="message"> {t("app.footer.input.message")}</label>
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
                 {/* <FontAwesomeIcon
                  icon={faLocationArrow}
                  className="fa"
                ></FontAwesomeIcon>{" "} */}
                {t("app.footer.address")}
              </span>
              {landingPageData.Contact ? landingPageData.Contact.address : "loading"}
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                {/* <FontAwesomeIcon
                  icon={faPhone}
                  className="fa fa-phone"
                ></FontAwesomeIcon>{" "} */}
                {t("app.footer.phone")}
              </span>{" "}
              {landingPageData.Contact ? landingPageData.Contact.phone : "loading"}
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                {/* <FontAwesomeIcon
                  icon={faEnvelopeOpen}
                  className="fa fa-envelope-o"
                ></FontAwesomeIcon>{" "} */}
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
                  {/* <FontAwesomeIcon
                    icon={faGithub}
                    className="fa"
                  ></FontAwesomeIcon> */}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href={landingPageData.Contact ? landingPageData.Contact.linkedin : "/"}
                >
                  {/* <FontAwesomeIcon
                    icon={faLinkedin}
                    className="fa"
                  ></FontAwesomeIcon> */}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href={landingPageData.Contact ? landingPageData.Contact.whatsapp : "/"}
                >
                  {/* <FontAwesomeIcon
                    icon={faWhatsappSquare}
                    className="fa"
                  ></FontAwesomeIcon> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>


      {/* <h2>
      <FormattedMessage id="app.titles.footer" defaultMessage="Contact Me"/></h2>
      <div className="row">
        <div className="col-md-8">
          <div className="contact__main--base">
            <div className="contact__title--base">
            <FormattedMessage id="app.footer.description" defaultMessage="Please fill out the form with accurate and complete information,
                and I will be contacting you as soon as posible."/>
            </div>
            <form name="sentMessage" validate onSubmit={handleSubmit}>
              <div className="row contact__input-row--base">
                <div className="form-group contact__input--base">
                  <label for="name"> <FormattedMessage id="app.footer.input.name" defaultMessage="Name"/></label>
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
                <label for="email"> <FormattedMessage id="app.footer.input.email" defaultMessage="Email"/></label>
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
              <label for="message"> <FormattedMessage id="app.footer.input.message" defaultMessage="Message"/></label>
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
                <FormattedMessage id="app.footer.button" defaultMessage="Send Message"/>
              </button>
            </form>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <h3><FormattedMessage id="app.footer.info" defaultMessage="Contact Information"/></h3>
            <p>
              <span>
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  className="fa"
                ></FontAwesomeIcon>{" "}
                <FormattedMessage id="app.footer.address" defaultMessage="Address"/>
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
                <FormattedMessage id="app.footer.phone" defaultMessage="Phone"/>
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
                <FormattedMessage id="app.footer.email" defaultMessage="Email"/>
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
      </div> */}


    </div>
  );
};
export default Contact;

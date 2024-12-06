import React, { useState } from "react";
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom";
import { faLevelUp } from "@fortawesome/free-solid-svg-icons/faLevelUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const lngs = {
  en: { nativeName: 'EN' },
  es: { nativeName: 'ES' }
}
export default function Header() {
  const { t, i18n } = useTranslation()
  const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
            /* you can also use 'auto' behaviour
         in place of 'smooth' */
        });
    };

    window.addEventListener("scroll", toggleVisible);
  return (
    <div className="row header__container--base">


      <div className="header__home-container--base">

      <Link
          to="/"
          className="header__home--base"
        >
          {t("app.header.portfolio")}
        </Link>
        {/* <a className="header__home--base">{t("app.header.portfolio")}</a> */}
      </div>
      <div className="header__link-container--base">

      <Link
          to="/projects"
          className="header__home--base"
        >
          {t("app.header.projects")}
        </Link>
        {/* <a className="header__home--base">{t("app.header.projects")}</a> */}

        <a
          href="https://res.cloudinary.com/esalomc/image/upload/v1622169320/EstebanSalomCastillo-SoftwareDeveloper.pdf"
          className="header__link--base"
          target="_blank"
        >
          {t("app.header.cv")}

        </a>

        <div className="header__select-container--base">
          {Object.keys(lngs).map((lng) => (
            <button type='submit' key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{lngs[lng].nativeName}</button>
          ))}
        </div>
      </div>

      <div onClick={scrollToTop} className="scroll-top" style={{ display: visible ? "flex" : "none" }}>
        <FontAwesomeIcon icon={faLevelUp}
              className="circle-icon"></FontAwesomeIcon>
      </div>

    </div>
  );
}

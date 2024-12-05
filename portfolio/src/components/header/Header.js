import React from "react";
import { NavLink as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import LanguageSelector from "../languageSelector/LanguageSelector";
import { FormattedMessage } from "react-intl";

export default function Header() {
  return (
    <div className="row header__container--base">
      {/* <div className="header__home-container--base">
        <Link
          exact
          to="/"
          activeClassName="selected"
          className="header__home--base"
        >
          <FormattedMessage id="app.header.portfolio" defaultMessage="Portfolio"/>
        </Link>
      </div>
      <div className="header__link-container--base">
        <Link
          to="/projects"
          activeClassName="selected"
          className="header__home--base"
        >
          <FormattedMessage id="app.header.projects" defaultMessage="Projects"/>
        </Link>
        <a
          href="https://res.cloudinary.com/esalomc/image/upload/v1622169320/EstebanSalomCastillo-SoftwareDeveloper.pdf"
          activeClassName="selected"
          className="header__link--base"
          target="_blank"
        >
          <FormattedMessage id="app.header.cv" defaultMessage="View CV"/>
          
        </a>
        <LanguageSelector></LanguageSelector>
      </div> */}

      <div className="header__home-container--base">
        <a className="header__home--base">Home</a>
      </div>
      <div className="header__link-container--base">
        <a className="header__home--base">Home</a>

        <a
          href="https://res.cloudinary.com/esalomc/image/upload/v1622169320/EstebanSalomCastillo-SoftwareDeveloper.pdf"
          activeClassName="selected"
          className="header__link--base"
          target="_blank"
        >
          CV

        </a>
      </div>

    </div>
  );
}

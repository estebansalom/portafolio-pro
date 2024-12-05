import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"
import "./resources/css/main.css"
import { useTranslation, Trans } from 'react-i18next'
import i18next from 'i18next'
import { BrowserRouter as Router, Route } from "react-router"
import JsonData from "./data/data.json";

const lngs = {
  en: { nativeName: 'EN' },
  es: { nativeName: 'ES' }
}

function App() {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const [count, setCount] = useState(0)
  const { t, i18n } = useTranslation()
  return (
    <>
      <div className='App'>
        {/* Header */}
        <div className="row header__container--base">


          <div className="header__home-container--base">
            <a className="header__home--base">Portfolio</a>
          </div>
          <div className="header__link-container--base">
            <a className="header__home--base">Projects</a>

            <a
              href="https://res.cloudinary.com/esalomc/image/upload/v1622169320/EstebanSalomCastillo-SoftwareDeveloper.pdf"
              activeClassName="selected"
              className="header__link--base"
              target="_blank"
            >
              View CV

            </a>
          </div>

          <div className="header__select-container--base">
          {Object.keys(lngs).map((lng) => (
            <button type='submit' key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{lngs[lng].nativeName}</button>
          ))}
        </div>

        </div>

        

        {/* Landing */}

        <div className="landing__container--base">

          <div
            className="landing__parallax-container--base"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/esalomc/image/upload/v1622167864/parallax5.jpg)`,
            }}
          >
            <div className="landing__title--base">
              Esteban Salom
            </div>
            <div className="landing__subtitle--base">{t("app.personal.job")} </div>
            <a href="#about" className="landing__button--base page-scroll">
              {t("app.parallax.button")}
            </a>{" "}
          </div>
          <div id="about" className="landing__about--base section">
            <div className="title-underline">
              <h2 className="section-title">{t("app.titles.aboutme")}</h2>
            </div>
            <div className="row landing__about-info--base">
              <div className="landing__about-image--base">
                <img src="https://res.cloudinary.com/esalomc/image/upload/v1622105242/IMG_20190903_091555_1.jpg" alt="" />
              </div>
              <div className="landing__about-description--base">

                {t("app.personal.description")}
              </div>
            </div>
          </div>
          <div id="skills" className="landing__skills--base section dark">
            <div className="title-underline">
              <h2 className="section-title dm-text">{t("app.titles.skills")}</h2>
            </div>
            <div className="landing__skill-icons--base">
              <div className="landing__skill-icon--base">
                {/* <FontAwesomeIcon
              icon={faReact}
              className="circle-icon"
            ></FontAwesomeIcon> */}
                React Icon
                <h3>React</h3>
              </div>
              <div className="landing__skill-icon--base">
                {/* <FontAwesomeIcon
              icon={faJava}
              className="circle-icon"
            ></FontAwesomeIcon> */}
                Java Icon
                <h3>Java Spring</h3>
              </div>
              <div className="landing__skill-icon--base">
                {/* <FontAwesomeIcon
              icon={faAngular}
              className="circle-icon"
            ></FontAwesomeIcon> */}
                Angular Icon
                <h3>Angular 12</h3>
              </div>
            </div>
            {landingPageData.Programming
          ? landingPageData.Programming.map((l, i) => (
              <div key={l.name + "-" + i} className="landing__language--base">
                <h3 className="dm-text">{l.name}</h3>
                <progress
                  theme={{
                    active: {
                      color: l.color,
                    },
                  }}
                  percent={l.percentage}
                  className="dm-text"
                />
              </div>
            ))
          : "Loading..."}
            <div className="row landing__soft-skills--base">
              {landingPageData.SoftSkills
                ? landingPageData.SoftSkills.map((sk, i) => (
                  <div
                    key={"skill-group-" + i}
                    className="landing__skill-group--base"
                  >
                    <ul className="landing__soft-skills-list--base">
                      {sk.map((s, j) => (
                        <h3 className="dm-text">{t("app.soft_skills." + (j + (i * 3) + 1))}</h3>
                      ))}
                    </ul>
                  </div>
                ))
                : "Loading..."}
            </div>
          </div>
          <div id="formation" className="landing__formation--base section">
            <div className="title-underline">
              <h2 className="section-title">{t("app.titles.formation")}</h2>
            </div>
            <div className="landing__degrees--base">
              {landingPageData.Formation
                ? landingPageData.Formation.map((f, i) => (
                  <div
                    key={f.name + "-" + i}
                    className="row landing__degree--base"
                  >
                    <h3 className="center">
                      {t("app.formation.degree." + f.i18n)} at {f.place}
                    </h3>{" "}
                    <h5 className="center">
                      {t("app.formation.start_date." + f.i18n)} - {t("app.formation.end_date." + f.i18n)}
                    </h5>
                  </div>
                ))
                : "Loading..."}
            </div>
          </div>
          <div id="portfolio" className="landing__portfolio--base section">
            <div className="title-underline">
              <h2 className="section-title">{t("app.titles.portfolio")}</h2>
            </div>
            <p className="landing__portfolio-description--base">
              {t("app.portfolio.description")}

            </p>
            {/* <div className="landing__portfolio-items--base">
            {landingPageData.Projects
            ? landingPageData.Projects.map((p, i) => <Portfolio data={p} />)
            : "Loading..."}
            </div> */}
          </div>
          <div id="languages" className="landing__languages--base section dark">
            <div className="title-underline">
              <h2 className="section-title dm-text">{t("app.titles.languages")}</h2>
            </div>

            {landingPageData.Languages
              ? landingPageData.Languages.map((l, i) => (
                <div key={l.name + "-" + i} className="landing__language--base">
                  <h3 className="dm-text"> {t("app.languages." + l.name.toLowerCase())}</h3>
                  <progress
                  theme={{
                    active: {
                      color: l.color,
                    },
                  }}
                  percent={l.percentage}
                  className="dm-text"
                />
                </div>
              ))
              : "Loading..."}
          </div>
          <div id="experience" className="landing__experience--base section">
            <div className="title-underline">
              <h2 className="section-title">{t("app.titles.experience")}</h2>
            </div>
            <div className="landing__experiences--base">
              {landingPageData.Experience
                ? landingPageData.Experience.map((e, i) => (
                  <div className="landing__position-underline--base">
                    <div
                      key={e.place + "-" + i}
                      className="landing__position--base"
                    >
                      <h3 className="center">
                        {t("app.experience.title." + e.i18n)} {t("app.general.at")} {t("app.experience.place." + e.i18n)}
                      </h3>{" "}
                      <h5 className="center">
                        {t("app.experience.start_date." + e.i18n)} - {t("app.experience.end_date." + e.i18n)}
                      </h5>
                      <div className=" row landing__job-info--base">
                        <img
                          src={e.image}
                          alt=""
                          className="landing__job-logo--base"
                        />
                        <div className="landing__job-description--base">
                          {t("app.experience.description." + e.i18n)}
                          {/* <ul>
                            {e.tasks.map((t, j) => (
                              <li>{t("app.experience.tasks." + e.i18n + "." + (j + 1))}</li>
                            ))}
                          </ul> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
                : "Loading..."}
            </div>
          </div>
          <div id="contact" className="landing__contact--base section">
                
          </div>
        </div>


      </div>

      {/* <h1>{t('app.experience.tasks.databricks.3')}</h1> */}
    </>
  )
}

export default App

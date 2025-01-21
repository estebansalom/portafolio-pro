import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faAngular, faJava, faJs, faPython, faNodeJs, faAws, faHtml5, faCss3, faSass, faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import PortfolioItem from "../../components/portfolio/PortfolioItem";
import { useTranslation } from 'react-i18next'
import Badge from "../../components/badge/Badge";
import JsonData from "../../data/data.json";
import Experience from "../../components/experience/Experience";

const Landing = (props) => {
  const { t, i18n } = useTranslation()
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const aboutRef = useRef()
  return (
    <div className="landing__container--base">

      <div
        className="landing__parallax-container--base"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/esalomc/image/upload/v1622167864/parallax5.jpg)`,
        }}
      >
        <div className="landing__title--base">
          Esteban Salom Castillo
        </div>


        {i18n.language === "es" ?

          <div className='landing__animation-container--base'>
            <div className='landing__animation-down--base'>
              <span>
                Arquitecto de <br />
                Desarrollador <br />
                Administrador de <br />
                Arquitecto de <br />
              </span>
            </div>
            <div className='landing__animation-up--base'>
              <span>
                Soluciones<br />
                Bases de Datos <br />
                Web Full-stack<br />
                Soluciones<br />
              </span>
            </div>

          </div>

          :

          <div className='landing__animation-container--base'>
            <div className='landing__animation-down--base'>
              <span>
                Cloud Solutions <br />
                Full-stack Web<br />
                MSSQL Database <br />
                Cloud Solutions <br />
              </span>
            </div>
            <div className='landing__animation-up--base'>
              <span>
                Architect <br />
                Administrator <br />
                Developer <br />
                Architect <br />
              </span>
            </div>

          </div>

        }


        <button onClick={()=>{aboutRef.current?.scrollIntoView({behavior: 'smooth'})}} className="landing__button--base page-scroll">
          {t("app.parallax.button")}
        </button>{" "}
      </div>
      <div ref={aboutRef} id="about" className="landing__about--base section">
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
      <div id="certifications" className="landing__certifications--base section dark">
        <div className="title-underline">
          <h2 className="section-title dm-text">{t("app.titles.certifications")}</h2>
        </div>
        <div className="landing__certifications-badges--base">
        {props.data.Certifications
            ? landingPageData.Certifications.map((p, i) => <Badge data={p} />)
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
        <div className="landing__portfolio-items--base">
          {props.data.Projects
            ? props.data.Projects.map((p, i) => <PortfolioItem data={p} />)
            : "Loading..."}
        </div>
      </div>
      
      <div id="skills" className="landing__skills--base section dark">
        <div className="title-underline">
          <h2 className="section-title dm-text">{t("app.titles.techskills")}</h2>
        </div>
        <div className="landing__skill-icons--base">
          <div className="landing__skill-icon--base">
            <FontAwesomeIcon
              icon={faReact}
              className="circle-icon"
            ></FontAwesomeIcon>
            <h3>ReactJS</h3>
          </div>
          <div className="landing__skill-icon--base">
            <FontAwesomeIcon
              icon={faJava}
              className="circle-icon"
            ></FontAwesomeIcon>
            <h3>Java Spring</h3>
          </div>
          <div className="landing__skill-icon--base">
            <FontAwesomeIcon
              icon={faAngular}
              className="circle-icon"
            ></FontAwesomeIcon>
            <h3>Angular 12</h3>
          </div>
          <div className="landing__skill-icon--base">
            <FontAwesomeIcon
              icon={faJs}
              className="circle-icon"
            ></FontAwesomeIcon>
            <h3>Javascript</h3>
          </div>
          <div className="landing__skill-icon--base">
            <FontAwesomeIcon
              icon={faPython}
              className="circle-icon"
            ></FontAwesomeIcon>
            <h3>Python</h3>
          </div>
          <div className="landing__skill-icon--base">
            <FontAwesomeIcon
              icon={faAws}
              className="circle-icon"
            ></FontAwesomeIcon>
            <h3>AWS</h3>
          </div>
        </div>
        
      </div>
      <Experience data={landingPageData}></Experience>

      <div id="skills" className="landing__skills--base section dark">
        <div className="title-underline">
          <h2 className="section-title dm-text">{t("app.titles.softskills")}</h2>
        </div>
      <div className="row landing__soft-skills--base">
          {props.data.SoftSkills
            ? props.data.SoftSkills.map((sk, i) => (
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
          {props.data.Formation
            ? props.data.Formation.map((f, i) => (
              <div
                key={f.name + "-" + i}
                className="row landing__degree--base"
              >
                <h3 className="center">
                  {t("app.formation.degree." + f.i18n)} {t("app.general.at")} {f.place}
                </h3>{" "}
                <h5 className="center">
                  {t("app.formation.start_date." + f.i18n)} - {t("app.formation.end_date." + f.i18n)}
                </h5>
              </div>
            ))
            : "Loading..."}
        </div>
      </div>
      
    </div>
  );
};

export default Landing;

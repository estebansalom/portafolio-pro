import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faAngular, faJava } from "@fortawesome/free-brands-svg-icons";
import Portfolio from "../../components/portfolio/PortfolioItem";
import { useTranslation } from 'react-i18next'
import JsonData from "../../data/data.json";
import Experience from "../../components/experience/Experience";

const Testing = (props) => {
    const [landingPageData, setLandingPageData] = useState({});
    const { t, i18n } = useTranslation()
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
    return (
        <div className="landing__container--base">

            
            <div id="skills" className="landing__skills--base section dark">
                <div className="title-underline">
                    <h2 className="section-title dm-text">{t("app.titles.skills")}</h2>
                </div>
                <div className="landing__skill-icons--base">
                    <div className="landing__skill-icon--base">
                        <FontAwesomeIcon
                            icon={faReact}
                            className="circle-icon"
                        ></FontAwesomeIcon>
                        <h3>React</h3>
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
            
            <div id="portfolio" className="landing__portfolio--base section">
                <div className="title-underline">
                    <h2 className="section-title">{t("app.titles.portfolio")}</h2>
                </div>
                <p className="landing__portfolio-description--base">
                    {t("app.portfolio.description")}

                </p>
                <div className="landing__portfolio-items--base">
                    {landingPageData.Projects
                        ? landingPageData.Projects.map((p, i) => <Portfolio data={p} />)
                        : "Loading..."}
                </div>
            </div>
            
            <Experience data={landingPageData}></Experience>
            
        </div>
    );
};

export default Testing;

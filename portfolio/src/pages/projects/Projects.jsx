import { useState, useEffect } from "react";
import Project from "../../components/project/Project.jsx";
import Contact from "../../components/contact/Contact.jsx";
import { useTranslation } from 'react-i18next'
import JsonData from "../../data/data.json";

const Projects = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  const { t, i18n } = useTranslation()
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className="projects__page-container--base">
      <div className="projects__page--base">
        <h1>{t("app.titles.projects")}</h1>
        <div className="projects__link-underline--base title-underline">
          <div className="projects__link-container--base row">
            {landingPageData.Projects
              ? landingPageData.Projects.map((d, i) => (
                  <a className="projects__link--base" href={"#" + d.name} i={i}>
                    {d.name}
                  </a>
                ))
              : "Loading..."}
          </div>
        </div>
        {landingPageData.Projects
          ? landingPageData.Projects.map((d, i) => <Project data={d} i={i}></Project>)
          : "Loading..."}
      </div>
    </div>
  );
};

export default Projects;

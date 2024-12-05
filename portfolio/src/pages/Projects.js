import React from "react";
import Project from "../components/project/Project.js";
import Contact from "../components/contact/Contact.js";
import { FormattedMessage } from "react-intl";

const Projects = (props) => {
  return (
    <div className="projects__page-container--base">
      <div className="projects__page--base">
        <h1><FormattedMessage id="app.titles.projects" defaultMessage="Projects"/></h1>
        <div className="projects__link-underline--base title-underline">
          <div className="projects__link-container--base row">
            {props.data
              ? props.data.map((d, i) => (
                  <a className="projects__link--base" href={"#" + d.name} i={i}>
                    {d.name}
                  </a>
                ))
              : "Loading..."}
          </div>
        </div>
        {props.data
          ? props.data.map((d, i) => <Project data={d} i={i}></Project>)
          : "Loading..."}
      </div>
      <div id="contact" className="landing__contact--base section">
        <Contact data={props.contact ? props.contact : {}} />
      </div>
    </div>
  );
};

export default Projects;

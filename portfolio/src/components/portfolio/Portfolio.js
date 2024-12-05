import React from "react";

const Portfolio = (props) => {
  return (
    <div
      className="portfolio__item--base"
      style={{
        backgroundImage: `url(` + props.data.images[0].url + `)`,
      }}
    >
      <div className="portfolio__overlay--base">
        <a
          className="portfolio__container--base"
          href={"/projects#" + props.data.name}
        >
          {props.data.name}
          {/* <img src={props.data.images ? props.data.images[0].url : ""} alt="" /> */}
        </a>
      </div>
    </div>
  );
};
export default Portfolio;

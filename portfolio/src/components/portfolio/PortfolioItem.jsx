import React from "react";
import { Link } from "react-router";
import { useTranslation } from 'react-i18next'

const PortfolioItem = (props) => {
  const { t, i18n } = useTranslation()
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
        </a>
        {/* <Link
          exact
          to={"/projects#" + props.data.name}
          activeClassName="selected"
          className="portfolio__container--base"
        >
          {props.data.name}
        </Link> */}
      </div>
    </div>
  );
};
export default PortfolioItem;

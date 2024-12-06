import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTranslation } from 'react-i18next'

const lngs = {
  en: { nativeName: 'EN' },
  es: { nativeName: 'ES' }
}
const Project = (props) => {
  const { t, i18n } = useTranslation()
  return (
    <div id={props.data.name} className="project__card-border--base">
      <div
        key={`${props.data.name}-${props.data.i}`}
        className="project-card project__card--base"
      >
        <h2>{props.data.name}</h2>
        <h4>{t("app.projects."+props.data.i18n+".position")}</h4>
        <h5>{props.data.date}</h5>
        <p className="project__description--base">{t("app.projects."+props.data.i18n+".description")}</p>
        <div className="thumbnail">
          {" "}
          <Carousel>
            {props.data.images
              ? props.data.images.map((pic, j) => (
                  <div key={`${pic.name}-${j}`}>
                    <img src={pic.url} alt={pic.alt} />
                    <p className="legend">{("app.projects."+props.data.i18n+".image.label."+(j+1))}</p>
                  </div>
                ))
              : ""}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Project;

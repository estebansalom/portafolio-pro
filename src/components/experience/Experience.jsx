import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next'
import JsonData from "../../data/data.json";

const Experience = (props) => {
    const [landingPageData, setLandingPageData] = useState({});
    const [seeMore, setseeMore] = useState(false);
    const [limit, setLimit] = useState(2);
    const { t, i18n } = useTranslation()
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    const toggleSeeMore = () => {
            if(limit<5){
                setseeMore(true)
                setLimit(9)
            }else{
                setLimit(2)
                setseeMore(false)
            }
      };

    return (
        <div id="experience" className="landing__experience--base section">
            <div className="title-underline">
                <h2 className="section-title">{t("app.titles.experience")}</h2>
            </div>
            <div className="landing__experiences--base">
            {props.data.Experience
            ? props.data.Experience.filter((item, idx) => idx < limit).map((e, i) => (
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
            {seeMore===true ? <div className="landing__job-toggle-button--base" onClick={()=>toggleSeeMore()}>{t("app.toggle-less.button")}</div> : <div className="landing__job-toggle-button--base" onClick={()=>toggleSeeMore()}>{t("app.toggle-more.button")}</div>}
        </div>
    );
};

export default Experience;

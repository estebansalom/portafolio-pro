import React, { useContext, useState } from "react";
import { Context } from "../Wrapper";

export default function LanguageSelector() {
  const context = useContext(Context);

  const [lang, setLang] = useState(context.locale)
  
  return (
    <div className="header__select-container--base">
      {/* <select
        className="header__select--base"
        value={context.locale}
        onChange={context.selectLanguage}
      >
        <option className="header__select-item--base" value="en-US">English</option>
        <option value="es-ES">Español</option>
      </select> */}

      {lang!=="es-ES"? <><div className="active" onClick={e => context.setLanguage("en-US")}>
        EN
      </div>
      <div>
        |
      </div>
      <div onClick={e => {context.setLanguage("es-ES")
    setLang("es-ES")}}>
        ES
      </div></>: <><div onClick={e => {context.setLanguage("en-US") 
      setLang("en-US")}}>
        EN
      </div>
      <div>
        |
      </div>
      <div className="active" onClick={e => context.setLanguage("es-ES")}>
        ES
      </div></> }
      
    </div>
  );
}
import { useState, useEffect } from 'react'
import "./App.css"
import "./resources/css/main.css"
import { useTranslation } from 'react-i18next'
import JsonData from "./data/data.json";
import Landing from './pages/landing/Landing'


function App() {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const { t, i18n } = useTranslation()

  return (
    <>
      <div className='App'>
        <Landing data={landingPageData}></Landing>
        </div>
    </>
  )
}

export default App

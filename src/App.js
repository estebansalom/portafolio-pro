import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import "./resources/css/main.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import Projects from "./pages/Projects";
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";
import { Context } from "./components/Wrapper";
import { useContext } from "react";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const context = useContext(Context);
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Route exact path="/">
          <Landing data={landingPageData}></Landing>
        </Route>
        <Route exact path="/projects">
          <Projects
            data={landingPageData.Projects}
            contact={landingPageData.Contact}
          ></Projects>
        </Route>
      </div>
    </Router>
  );
}

export default App;

import "./App.scss";
import Header from "./components/Header";
import MainContent from "./components/MainContent.js";
import { isMobile } from "react-device-detect";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app container-fluid">
        <div className={`app row ${isMobile ? "d-flex flex-column" : ""}`}>
          <div
            className={`header-section col col-sm-3 col-md-3 col-lg-3 col-xl-3 ${
              isMobile ? "max-h-10" : ""
            }`}
          >
            <Header></Header>
          </div>
          <div className="content-section col col-sm-9 col-md-9 col-lg-9 col-xl-9">
            <MainContent></MainContent>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

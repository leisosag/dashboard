import { useState, useEffect } from "react";
import MediaCardsContainer from "./components/MediaCardsContainer";
import StatsContainer from "./components/StatsContainer";
import "./App.css";

const App = () => {
  const getInitialMode = () => {
    const isReturningUser = "dark" in localStorage;
    const saveMode = JSON.parse(localStorage.getItem("dark"));
    const userPref = getPrefColorScheme();

    if (isReturningUser) {
      return saveMode;
    } else if (userPref) {
      return true;
    } else {
      return false;
    }
  };

  const getPrefColorScheme = () => {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [darkMode, setDarkMode] = useState(getInitialMode);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <div className="container">
          <div className="row justify-content-between pt-2 pb-2">
            <div className="col-md-6 texto-header">
              <h1>Social Media Dashboard</h1>
              <p>Total Followers: 23,004</p>
            </div>
            <div className="container">
              <div className="toggle-container">
                <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
                <span className="toggle">
                  <input
                    checked={darkMode}
                    onChange={() => setDarkMode((prevMode) => !prevMode)}
                    type="checkbox"
                    className="checkbox"
                    id="checkbox"
                  />
                  <label htmlFor="checkbox"></label>
                </span>
                <span style={{ color: darkMode ? "slateblue" : "grey" }}>
                  ☾
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <MediaCardsContainer />
      <div className="container pt-2 pb-2">
        <h2>Overview - Today</h2>
      </div>
      <StatsContainer />
    </div>
  );
};

export default App;

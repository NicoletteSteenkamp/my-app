import React from "react";
import "./App.css";

import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Boksburg" />
        <footer>
          This app is coded by Nicolette Steenkamp and the open source code is
          here on{" "}
          <a
            href="https://github.com/NicoletteSteenkamp/my-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          and is deployed here{" "}
          <a
            href="https://iridescent-buttercream-cbf8d5.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

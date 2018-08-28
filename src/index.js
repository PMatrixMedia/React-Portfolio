import React from "react";
import ReactDOM from "react-dom";
import Intro from "./Components/Intro";
import registerServiceWorker from "./registerServiceWorker";
import About from "./Pages/About/About";

ReactDOM.render(<About />, document.getElementById("root"));
registerServiceWorker();

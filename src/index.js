import React from "react";
import ReactDOM from "react-dom";
import Intro from "./Components/Intro";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Intro />, document.getElementById("root"));
registerServiceWorker();

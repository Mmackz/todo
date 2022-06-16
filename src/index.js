import { DOM } from "/src/modules/dom";

// global stylesheets
import "./reset.css";
import "./style.css";

// global scripts


// import components
import App from "./components/app";

const root = DOM.getEl("#root");
root.appendChild(App());

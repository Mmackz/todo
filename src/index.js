import { DOM } from "/src/modules/dom";

// global stylesheets
import "./reset.css";
import "animate.css";

// import app component
import App from "./components/app";

const root = DOM.getEl("#root");
root.appendChild(App());

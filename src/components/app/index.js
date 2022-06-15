import { Background } from "../background";
import { DOM } from "/src/modules/dom";
import { darkModeController } from "/src/modules/darkModeController";

const App = () => {
   const main = DOM.createEl("main");
   const bg = Background(darkModeController.getMode());
   main.append(bg);
   return main;
};

export default App;

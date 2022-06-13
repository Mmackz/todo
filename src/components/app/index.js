import { Background } from "../background";
import { darkModeController } from "../../modules/darkModeController";

const App = () => {
   const main = document.createElement("main");
   const bg = Background(darkModeController.getMode());
   main.append(bg);
   return main;
};

export default App;

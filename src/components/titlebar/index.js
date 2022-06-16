import { Background } from "../background";
import { DOM, setVariables } from "/src/modules/dom";
import iconSun from "/assets/images/icon-sun.svg";
import iconMoon from "/assets/images/icon-moon.svg";
import { darkModeController } from "/src/modules/darkModeController";

export const Titlebar = () => {
   const { getMode, toggleMode } = darkModeController;

   const titlebar = DOM.createEl("header", "titlebar");
   const title = DOM.createEl("h1", "title", "TODO");
   const darkModeIcon = DOM.createEl("img", "lightmode-icon", null, {
      src: getMode() === "dark" ? iconSun : iconMoon,
      alt: "Toggle dark mode"
   });
   darkModeIcon.addEventListener("click", () => {
      toggleMode();
      const newMode = getMode();
      setVariables(newMode);
      darkModeIcon.src = newMode === "dark" ? iconSun : iconMoon;
      DOM.replaceEl("#bgimg", Background(newMode));
   });

   titlebar.append(title, darkModeIcon);
   return titlebar;
};

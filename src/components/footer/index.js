import { DOM } from "/src/modules/dom";

export const Footer = () => {
   const footer = DOM.createEl("div", "footer");
   const footerText = DOM.createEl("p", "footer-text", "Drag and drop to reorder list");
   footer.append(footerText);
   return footer;
};

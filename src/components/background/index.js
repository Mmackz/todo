import bgDesktopLight from "/assets/images/bg-desktop-light.jpg";
import bgDesktopDark from "/assets/images/bg-desktop-dark.jpg";
import bgMobileLight from "/assets/images/bg-mobile-light.jpg";
import bgMobileDark from "/assets/images/bg-mobile-dark.jpg";
import { DOM } from "/src/modules/dom";

export const Background = (mode) => {
   // create dynamic image based on screen size
   const bgimg = DOM.createEl("picture", null, null, {
      id: "bgimg"
   });

   // create source for desktop
   const bgDesktopImg = mode === "dark" ? bgDesktopDark : bgDesktopLight;
   const bgDesktop = DOM.createEl("source", null, null, {
      media: "(min-width: 540px)",
      srcset: bgDesktopImg
   });

   // create source for mobile
   const bgMobileImg = mode === "dark" ? bgMobileDark : bgMobileLight;
   const bgMobile = DOM.createEl("source", null, null, {
      media: "(max-width: 539.98px)",
      srcset: bgMobileImg
   });

   // create fallback image
   const bgImage = DOM.createEl("img", ["bg-image", "fade-in"], null, {
      src: mode === "dark" ? bgDesktopDark : bgDesktopLight,
      alt: "background",
      "aria-hidden": "true"
   });

   // append sources to picture
   bgimg.append(bgDesktop, bgMobile, bgImage);

   return bgimg;
};

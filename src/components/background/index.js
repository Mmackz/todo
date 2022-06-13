import bgDesktopLight from "/assets/images/bg-desktop-light.jpg";
import bgDesktopDark from "/assets/images/bg-desktop-dark.jpg";
import bgMobileLight from "/assets/images/bg-mobile-light.jpg";
import bgMobileDark from "/assets/images/bg-mobile-dark.jpg";

export const Background = (mode) => {
   // create dynamic image based on screen size
   const bgimg = document.createElement("picture");

   // create source for desktop
   const bgDesktop = document.createElement("source");
   const bgDesktopImg = mode === "dark" ? bgDesktopDark : bgDesktopLight;
   bgDesktop.setAttribute("media", "(min-width: 540px)");
   bgDesktop.setAttribute("srcset", bgDesktopImg);

   // create source for mobile
   const bgMobile = document.createElement("source");
   const bgMobileImg = mode === "dark" ? bgMobileDark : bgMobileLight;
   bgMobile.setAttribute("media", "(max-width: 539.98px)");
   bgMobile.setAttribute("srcset", bgMobileImg);

   // create fallback image
   const bgImage = document.createElement("img");
   bgImage.setAttribute("src", mode === "dark" ? bgDesktopDark : bgDesktopLight);
   bgImage.setAttribute("alt", "background");
   bgImage.setAttribute("aria-hidden", "true");
   bgImage.classList.add("bg-image");

   // append sources to picture
   bgimg.append(bgDesktop, bgMobile, bgImage);

   return bgimg;
};

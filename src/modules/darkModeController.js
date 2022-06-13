export const darkModeController = (() => {
   let darkModeEnabled =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

   function getMode() {
      return darkModeEnabled ? "dark" : "light";
   }

   function toggleMode() {
      darkModeEnabled = !darkModeEnabled;
   }

   return {
      getMode,
      toggleMode
   };
})();

const DOM = () => {
   const getEl = (selector) => document.querySelector(selector);
   const getEls = (selector) => document.querySelectorAll(selector);

   const render = (component) => {
      const root = getEl("#root");
      root.innerHTML = "";
      root.appendChild(component());
   }
}
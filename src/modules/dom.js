export const DOM = (() => {
   const getEl = (selector) => document.querySelector(selector);
   const getEls = (selector) => document.querySelectorAll(selector);
   const createEl = (tag, classes, text, attributes) => {
      const el = document.createElement(tag);
      if (classes) {
         if (typeof classes === "string") {
            el.classList.add(classes);
         } else el.classList.add(...classes);
      }
      if (text) {
         el.textContent = text;
      }
      if (attributes) {
         Object.keys(attributes).forEach((key) => {
            el.setAttribute(key, attributes[key]);
         });
      }
      return el;
   };
   const updateEl = (selector, content) => {
      const el = getEl(selector);
      el.innerHTML = content;
   };

   return {
      getEl,
      getEls,
      createEl,
      updateEl
   };
})();

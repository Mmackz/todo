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
   const updateEl = (selector, node) => {
      const el = getEl(selector);
      el.innerHTML = "";
      el.appendChild(node);
   };
   const replaceEl = (selector, node) => {
      const el = getEl(selector);
      el.parentNode.replaceChild(node, el);
   };

   return {
      getEl,
      getEls,
      createEl,
      updateEl,
      replaceEl
   };
})();

export const setVariables = (mode) => {
   const root = document.documentElement;
   if (mode === "dark") {
      root.style.setProperty("--bg-color", "#171823");
      root.style.setProperty("--text-color", "#C8CBE7");
      root.style.setProperty("--todo-bg", "#25273D");
      root.style.setProperty("--todo-border", "#393A4B");
      root.style.setProperty("--todo-inactive", "#4D5067");
      root.style.setProperty("--todo-placeholder", "#767992");
   } else {
      root.style.setProperty("--bg-color", "#f9f9f9");
      root.style.setProperty("--text-color", "#494C6B");
      root.style.setProperty("--todo-bg", "#ffffff");
      root.style.setProperty("--todo-border", "#E3E4F1");
      root.style.setProperty("--todo-inactive", "#D1D2DA");
      root.style.setProperty("--todo-placeholder", "#9495a5");
   }
};

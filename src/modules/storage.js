export const storage = (() => {
   const get = (key) => {
      return JSON.parse(localStorage.getItem(key));
   }
   const set = (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
   }
   const reset = () => {
      localStorage.clear();
   }
   return {
      get,
      set,
      reset
   }
})();
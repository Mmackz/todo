import { DOM } from "/src/modules/dom";
import { storage } from "/src/modules/storage";

export const Menubar = () => {
   const menu = DOM.createEl("div", "menu");

   // get number of todos from localStorage
   const todoAmount = storage.get("todos").filter((todo) => !todo.completed).length;
   const itemsLeft = DOM.createEl("span", "items-left", `${todoAmount} item${todoAmount === 1 ? "" : "s"} left`);

   // create button to clear completed todos
   const clearCompleted = DOM.createEl("div", "clear-completed", "Clear Completed", {
      "tabindex": "0",
      "aria-label": "Clear completed todos",
      "aria-role": "button"
   });
   menu.append(itemsLeft, clearCompleted);
   return menu;
};

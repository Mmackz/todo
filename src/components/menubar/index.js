import { DOM } from "/src/modules/dom";
import { ToDoList } from "../todoList";
import { storage, currentTab } from "/src/modules/storage";

export const Menubar = () => {
   const tab = currentTab.get();
   const menu = DOM.createEl("div", "menu");

   // get number of todos from localStorage
   let todoAmount = storage
      .get("todos")
      .filter((todo) => (tab === 2 ? todo.completed : !todo.completed)).length;

   const itemsLeft = DOM.createEl(
      "span",
      "items-left",
      `${todoAmount} item${todoAmount === 1 ? "" : "s"} ${tab === 0 ? "left" : ""}`
   );

   // create button to clear completed todos
   const clearCompleted = DOM.createEl("div", "clear-completed", "Clear Completed", {
      tabindex: "0",
      "aria-label": "Clear completed todos",
      "aria-role": "button"
   });
   menu.append(itemsLeft, clearCompleted);
   return menu;
};

export const Submenu = () => {
   function changeList(i, el) {
      if (el.classList.contains("active")) return;
      DOM.getEl(".submenu > .active").classList.remove("active");
      el.classList.add("active");
      let todos = storage.get("todos");
      currentTab.set(i);
      if (i === 1) todos = todos.filter((todo) => !todo.completed);
      if (i === 2) todos = todos.filter((todo) => todo.completed);
      DOM.replaceEl(".todo-list", ToDoList(todos));
      DOM.replaceEl(".menu", Menubar());
   }

   const submenu = DOM.createEl("div", "submenu-container");
   const inner = DOM.createEl("div", "submenu");
   ["All", "Active", "Completed"].forEach((item, i) => {
      const el = DOM.createEl("div", "submenu-item", item, {
         tabindex: "0",
         "aria-label": `Show ${item} todos`,
         "aria-role": "button",
         class: currentTab.get() === i ? "active" : ""
      });
      el.addEventListener("click", () => changeList(i, el));
      inner.append(el);
   });
   submenu.append(inner);
   return submenu;
};

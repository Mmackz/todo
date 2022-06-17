import { DOM } from "/src/modules/dom";
import { ToDoList } from "../components/todoList";
import { Menubar, Submenu } from "../components/menubar";
import { storage, currentTab } from "/src/modules/storage";

export const list = (() => {
   function changeList(i, el) {
      if (el.classList.contains("active")) return;
      currentTab.set(i);
      renderList();
   }

   function filterList() {
      let todos = storage.get("todos");
      const tab = currentTab.get();
      if (tab === 2) todos = todos.filter((todo) => todo.completed);
      if (tab === 1) todos = todos.filter((todo) => !todo.completed);
      return todos;
   }

   function renderList() {
      const todos = filterList();
      DOM.replaceEl(".todo-list", ToDoList(todos));
      DOM.replaceEl(".menu", Menubar());
      DOM.replaceEl(".container > .submenu-container", Submenu());
   }

   return {
      changeList,
      filterList,
      renderList
   };
})();

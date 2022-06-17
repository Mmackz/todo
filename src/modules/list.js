import { DOM } from "/src/modules/dom";
import { ToDoList } from "../components/todoList";
import { storage, currentTab } from "/src/modules/storage";

export const list = (() => {
   function changeList(i, el) {
      if (el.classList.contains("active")) return;
      currentTab.set(i);
      renderList();
   }

   function renderList() {
      let todos = storage.get("todos");
      const tab = currentTab.get();
      if (tab === 2) todos = todos.filter((todo) => todo.completed);
      if (tab === 1) todos = todos.filter((todo) => !todo.completed);
      DOM.replaceEl(".todo-list", ToDoList(todos));
      DOM.replaceEl(".menu", Menubar());
      DOM.replaceEl(".container > .submenu-container", Submenu());
   }

   return {
      changeList,
      renderList
   };
})();

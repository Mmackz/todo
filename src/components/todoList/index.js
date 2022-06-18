import { DOM } from "/src/modules/dom";
import { Todo } from "../todo";
import { storage, currentTab } from "/src/modules/storage";
import { list } from "/src/modules/list";
import Sortable from "sortablejs";

export const ToDoList = (todos) => {
   const todoList = DOM.createEl("ul", "todo-list");
   if (todos.length === 0) {
      const empty = DOM.createEl("div", ["todo-empty", "todo-text"], "Nothing here...");
      todoList.append(empty);
   } else {
      todos.forEach((todo, index) => {
         todoList.append(Todo(todo, index));
      });
   }

   // make todo list sortable
   const sortable = new Sortable(todoList, {
      animation: 150,
      onUpdate: (e) => {
         const todos = storage.get("todos");
         const tab = currentTab.get();
         const indexFrom = e.item.dataset.index;
         let indexTo = e.newIndex;
         if (tab) {
            indexTo = todos.filter((todo) =>
               tab === 1 ? !todo.completed : todo.completed
            )[indexTo].index;
         }
         todos.splice(indexTo, 0, todos.splice(indexFrom, 1)[0]);
         storage.set(
            "todos",
            todos.map((todo, i) => ({ ...todo, index: i }))
         );
         list.renderList();
      }
   });
   return todoList;
};

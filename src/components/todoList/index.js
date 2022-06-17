import { DOM } from "/src/modules/dom";
import { Todo } from "../todo";

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
   return todoList;
};

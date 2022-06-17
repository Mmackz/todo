import { DOM } from "/src/modules/dom";
import { Todo } from "../todo";

export const ToDoList = (todos) => {
   const todoList = DOM.createEl("ul", "todo-list");
   todos.forEach((todo, index) => {
      todoList.append(Todo(todo, index));
   });
   return todoList;
};

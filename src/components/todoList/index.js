import { DOM } from "/src/modules/dom";
import { Todo } from "../todo";
import { Menubar } from "../menubar";

export const ToDoList = (todos) => {
   const todoList = DOM.createEl("ul", "todo-list");
   todos.forEach((todo) => {
      todoList.append(Todo(todo));
   });

   const menu = Menubar();

   return todoList;
};

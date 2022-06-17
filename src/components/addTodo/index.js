import { DOM } from "/src/modules/dom";
import { storage } from "/src/modules/storage";
import { ToDoList } from "../todoList";
import iconCheck from "/assets/images/icon-check.svg";

export const AddTodo = () => {
   const addTodo = DOM.createEl("div", ["todo-item", "add-todo"]);
   const todoCheckbox = DOM.createEl("input", "checkbox", null, {
      type: "checkbox"
   });
   const todoLabel = DOM.createEl("label", "todo-checkbox");
   todoLabel.append(DOM.createEl("img", "checkbox-icon", null, {
      src: iconCheck,
      alt: "checkmark"
   }));
   const todoText = DOM.createEl("p", ["todo-text", "todo-input"], null, {
      type: "text",
      placeholder: "Create a new todo...",
      contenteditable: "",
      spellcheck: "false",
      "aria-role": "input",
      "aria-label": "Create a new todo"
   });

   todoText.addEventListener("keydown", e => {
      if (e.key === "Enter") {
         e.preventDefault();
         const todo = {
            text: todoText.textContent,
            completed: false
         };
         const text = todoText.textContent.trim();
         todoText.textContent = "";
         if (!text) return;
         const todos = storage.get("todos");
         todos.push(todo);
         storage.set("todos", todos);
         DOM.replaceEl(".todo-list", ToDoList(todos));
      }
   });


   addTodo.append(todoCheckbox, todoLabel, todoText);
   return addTodo;
}
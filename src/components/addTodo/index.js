import { DOM } from "/src/modules/dom";
import { storage } from "/src/modules/storage";
import { list } from "/src/modules/list";
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
      pholder: "Create a new todo...",
      contenteditable: "",
      spellcheck: "false"
   });

   todoText.addEventListener("keydown", e => {
      if (e.key === "Enter") {
         e.preventDefault();
         const todo = {
            text: todoText.textContent,
            completed: todoCheckbox.checked
         };
         const text = todoText.textContent.trim();
         todoText.textContent = "";
         if (!text) return;
         const todos = storage.get("todos");
         todos.push(todo);
         storage.set("todos", todos.map((todo, i) => ({ ...todo, index: i })));
         list.renderList();
         todoCheckbox.checked = false;
      }
   });

   todoLabel.addEventListener("click", () => {
      todoCheckbox.checked = !todoCheckbox.checked;
   });


   addTodo.append(todoCheckbox, todoLabel, todoText);
   return addTodo;
}
import { DOM } from "/src/modules/dom";
import { Menubar } from "../menubar";
import { storage } from "/src/modules/storage";
import iconCross from "/assets/images/icon-cross.svg";
import iconCheck from "/assets/images/icon-check.svg";

export const Todo = (todo, index) => {
   function onTodoClick(e) {
      if (e.target.type === "checkbox") return;
      const input = e.currentTarget.firstElementChild;
      input.checked = !input.checked;
      const todos = storage.get("todos");
      todos[index].completed = input.checked;
      storage.set("todos", todos);
      DOM.replaceEl(".menu", Menubar());
   }

   const todoItem = DOM.createEl("li", "todo-item");
   const todoCheckbox = DOM.createEl("input", "checkbox", null, {
      type: "checkbox"
   });
   const todoLabel = DOM.createEl("label", "todo-checkbox");
   todo.completed && todoCheckbox.setAttribute("checked", "");
   todoLabel.append(DOM.createEl("img", "checkbox-icon", null, {
      src: iconCheck,
      alt: "checkmark"
   }));
   const todoText = DOM.createEl("span", "todo-text", todo.text);
   todoItem.addEventListener("click", onTodoClick);
   const removeTodo = DOM.createEl("img", "todo-remove", null, {
      src: iconCross,
      alt: "Remove todo"
   });
   todoItem.append(todoCheckbox, todoLabel, todoText, removeTodo);

   return todoItem;
};

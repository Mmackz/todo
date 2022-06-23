import { DOM } from "/src/modules/dom";
import { Menubar } from "../menubar";
import { storage } from "/src/modules/storage";
import { list } from "/src/modules/list";
import iconCross from "/assets/images/icon-cross.svg";
import iconCheck from "/assets/images/icon-check.svg";

export const Todo = (todo, index) => {
   function onTodoClick(e) {
      if (e.target.type === "checkbox") return;
      const input = e.currentTarget.firstChild.firstChild;
      input.checked = !input.checked;
      const todos = storage.get("todos");
      todos[todo.index].completed = input.checked;
      storage.set("todos", todos.map((todo, i) => ({ ...todo, index: i })));
      DOM.replaceEl(".menu", Menubar());
      list.renderList();
   }

   function onTodoDelete(e) {
      e.stopPropagation();
      e.target.parentNode.classList.add("fadeRight")
      setTimeout(() => {
         const todos = storage.get("todos");
         todos.splice(index, 1);
         storage.set("todos", todos.map((todo, i) => ({ ...todo, index: i })));
         list.renderList();
      }, 500)
   }

   const todoItem = DOM.createEl("li", "todo-item", null, { "data-index": todo.index });
   const todoInner = DOM.createEl("div", "todo-inner");
   const todoCheckbox = DOM.createEl("input", "checkbox", null, {
      type: "checkbox"
   });
   const todoLabel = DOM.createEl("label", "todo-checkbox");
   todo.completed && todoCheckbox.setAttribute("checked", "");
   todoLabel.append(
      DOM.createEl("img", "checkbox-icon", null, {
         src: iconCheck,
         alt: "checkmark"
      })
   );
   const todoText = DOM.createEl("span", "todo-text", todo.text);
   todoItem.addEventListener("click", onTodoClick);
   const removeTodo = DOM.createEl("img", "todo-remove", null, {
      src: iconCross,
      alt: "Remove todo"
   });
   removeTodo.addEventListener("click", onTodoDelete);
   todoInner.append(todoCheckbox, todoLabel, todoText, removeTodo);
   todoItem.append(todoInner);

   return todoItem;
};

/* 
ideas
-----
  - add inner div to animate out when todo is completed 
  - animate in when todo is added
  - add hover effect to ring when todo-item is hovered
  - animate list change
  - add some some transitions for hover effect
*/
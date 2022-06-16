import { DOM } from "/src/modules/dom";

export const Todo = (todo) => {
   function onTodoClick(e) {
      if (e.target.type === "checkbox") return;
      const input = e.currentTarget.firstElementChild;
      input.checked = !input.checked;
   }

   const todoItem = DOM.createEl("li", "todo-item");
   const todoCheckbox = DOM.createEl("input", "checkbox", null, {
      type: "checkbox"
   });
   const todoLabel = DOM.createEl("label", "todo-checkbox");
   todo.completed && todoCheckbox.setAttribute("checked", "");
   const todoText = DOM.createEl("span", "todo-text", todo.text);
   todoItem.addEventListener("click", onTodoClick);
   const removeTodo = DOM.createEl("div", "todo-remove");
   todoItem.append(todoCheckbox, todoLabel, todoText, removeTodo);

   return todoItem;
};

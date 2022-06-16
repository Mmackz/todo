import { Background } from "../background";
import { ToDoList } from "../todoList";
import { DOM } from "/src/modules/dom";
import { storage } from "/src/modules/storage";
import { darkModeController } from "/src/modules/darkModeController";
import defaultTodos from "/src/data/defaultTodos.json";

const App = () => {
   // create background
   const main = DOM.createEl("main");
   const bg = Background(darkModeController.getMode());
   main.append(bg);

   // load todos from localStorage
   if (storage.get("todos") === null) storage.set("todos", defaultTodos);
   const todos = storage.get("todos");

   main.append(ToDoList(todos));
   return main;
};

export default App;

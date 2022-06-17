import "./app.css";
import { Background } from "../background";
import { Titlebar }  from "../titlebar";
import { AddTodo } from "../addTodo";
import { ToDoList } from "../todoList";
import { Menubar, Submenu } from "../menubar";
import { DOM, setVariables } from "/src/modules/dom";
import { storage } from "/src/modules/storage";
import { darkModeController } from "/src/modules/darkModeController";
import defaultTodos from "/src/data/defaultTodos.json";

const App = () => {
   // create background
   const main = DOM.createEl("main", "container");
   const bg = Background(darkModeController.getMode());
   main.append(bg);

   // load todos from localStorage
   if (storage.get("todos") === null) storage.set("todos", defaultTodos);
   const todos = storage.get("todos");

   // set CSS variables based on current light mode
   const root = document.documentElement;
   const { getMode } = darkModeController;
   setVariables(getMode());

   main.append(Titlebar(), AddTodo(), ToDoList(todos), Menubar(), Submenu());
   return main;
};

export default App;

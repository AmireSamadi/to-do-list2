import { createContext } from "react";

let ToDoContext = createContext({
  ToDos: [],
  NameTodo: "",
  ToDoseWork: 0,
  Index: null,

  creatNewTodo: () => {},
  deleteTodo: () => {},
  completedToDo: () => {},
  valueInput: () => {},
  clearToDos: () => {},

  editTask: () => {},
});

export default ToDoContext;

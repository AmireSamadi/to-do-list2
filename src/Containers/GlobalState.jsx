import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import ToDoContext from "./../Context/TodoContext";

const GlobalState = (props) => {
  const [getToDos, setToDos] = useState([]);
  const [getNameTodo, setNameTodo] = useState("");
  const [getDone, setDone] = useState(0);
  const [getEditingText, setEditingText] = useState(null);

  // create New toDos

  const creatNewTodo = () => {
    let toDos = [...getToDos];
    let toDo = {
      id: uuidv4(),
      text: getNameTodo,
      completed: false,
      workDone: 0,
      done: 0,
    };
    if (getNameTodo !== "" && getNameTodo !== " ") {
      toDos.push(toDo);
      setToDos(toDos);
      setNameTodo("");
    }
  };

  const completedToDo = (id) => {
    let toDos = [...getToDos];
    let indexTodo = toDos.findIndex((t) => t.id === id);
    let toDo = toDos[indexTodo];
    toDo.completed = !toDo.completed;
    toDos[indexTodo] = toDo;

    let handDone = toDos[indexTodo];
    if (toDo.completed) {
      handDone.done = handDone.done += 1;
      setDone(handDone.done);
    } else {
      handDone.done -= 1;
      setDone(handDone.done);
    }

    let works = toDos.filter((t) => t.done === 1);

    handDone.workDone = works.length;

    setDone(handDone.workDone);
    toDos[indexTodo] = handDone;
    setToDos(toDos);
  };

  const deleteTodo = (id) => {
    let toDos = [...getToDos];
    let indexTodo = toDos.filter((toDo) => toDo.id !== id);
    setToDos(indexTodo);
  };

  const valueInput = (event) => {
    setNameTodo(event.target.value);
    setEditingText(event.target.value);
  };

  const clearToDos = () => {
    setToDos([]);
  };

  const editTask = (id) => {
    const updatedTodos = [...getToDos].map((todo) => {
      if (todo.id === id) {
        setNameTodo(todo.text);
        todo.text = getNameTodo;
      }
      return todo;
    });

    setToDos(updatedTodos);
    if (getNameTodo !== "") {
      setNameTodo("");
    }
  };

  return (
    <ToDoContext.Provider
      value={{
        ToDos: getToDos,
        ToDoseWork: getDone,
        NameTodo: getNameTodo,
        Index: getEditingText,

        creatNewTodo: creatNewTodo,
        deleteTodo: deleteTodo,
        completedToDo: completedToDo,
        valueInput: valueInput,
        clearToDos: clearToDos,
        // findTodo: findTodo,
        editTask: editTask,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
};

export default GlobalState;

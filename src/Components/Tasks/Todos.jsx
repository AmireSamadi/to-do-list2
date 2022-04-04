import React, { Fragment, useContext } from "react";
import Todo from "./Todo";
import ToDoContext from "./../../Context/TodoContext";

const Todos = () => {
  let context = useContext(ToDoContext);
  const {
    ToDos,
    deleteTodo,
    completedToDo,
    ToDoseWork,
    findTodo,
    editTask,
    Index,
  } = context;

  return (
    <Fragment>
      <div className="d-flex justify-content-between mt-4 border-bottom">
        <div className=" mx-4 text-center">
          <h4>تعداد کارها </h4>
          <h5 className="px-5 d-block">{ToDos.length}</h5>
        </div>

        <div className="mx-3 text-center">
          <h4>تعداد کار های انجام شده </h4>
          <h5 className=" mx-5 d-block">{ToDoseWork}</h5>
        </div>
      </div>
      <ul className="list-group list-group-flush border-0">
        {ToDos.length > 0 ? (
          ToDos.map((todo) => (
            <li key={todo.id} className="list-group-item">
              <Todo
                isCompleted={todo.completed}
                deleteTodo={() => deleteTodo(todo.id)}
                completed={() => completedToDo(todo.id)}
                text={todo.text}
                toDo={ToDos}
                findTodo={() => findTodo(todo.id)}
                editTask={() => editTask(todo.id)}
              />
            </li>
          ))
        ) : (
          <div className="alert alert-light mt-3 w-75 mx-auto">
            <p className="text-center">هیچ کاری برای امروز ثبت نشده دوست من</p>
          </div>
        )}
      </ul>
    </Fragment>
  );
};

export default Todos;

import React, { Fragment } from "react";

const Todo = ({
  deleteTodo,
  completed,
  text,
  isCompleted,
  findTodo,
  editTask,
}) => {
  return (
    <Fragment>
      <div
        className={`todo-indicator ${
          isCompleted ? "bg-success" : "bg-warning"
        } `}
      ></div>
      <div className="widget-content p-0">
        <div className="widget-content-wrapper">
          <div className="widget-content-right flex1">
            <div className="widget-heading">
              {isCompleted ? (
                <del style={{ color: "green" }}>{text}</del>
              ) : (
                text
              )}
            </div>
          </div>
          <div className="widget-content-left">
            {" "}
            <button
              className="btn btn-transition btn-outline-info"
              onClick={editTask}
            >
              <i className="fa fa-pencil-square-o"></i>
            </button>{" "}
            <button
              className="border-0 btn-transition btn btn-outline-success"
              onClick={completed}
            >
              {" "}
              <i className="fa fa-check"></i>
            </button>{" "}
            <button
              className="border-0 btn-transition btn btn-outline-danger"
              onClick={deleteTodo}
            >
              {" "}
              <i className="fa fa-trash"></i>{" "}
            </button>{" "}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Todo;

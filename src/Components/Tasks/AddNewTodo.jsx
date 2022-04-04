import React, { useContext } from "react";
import ToDoContext from "./../../Context/TodoContext";
const AddNewTodo = () => {
  let context = useContext(ToDoContext);
  const { valueInput, creatNewTodo, NameTodo, clearToDos } = context;
  return (
    <div className="w-50 mx-auto  mt-3 p-3  wrapper">
      <form
        onSubmit={(event) => event.preventDefault()}
        className="form-inline justify-content-center"
      >
        <div className="input-group w-100">
          <input
            type="text"
            className="form-control rounded"
            placeholder="اضافه کردن کار جدید"
            value={NameTodo}
            onChange={valueInput}
          />

          <div className="input-group-prepend ">
            <button
              type="submit"
              className=" btn-sm bg-transparent fa fa-plus-square text-light "
              onClick={creatNewTodo}
            ></button>
          </div>
        </div>
        <button
          type="button"
          className="d-flex justify-content-center btn-sm bg-primary   text-light  mt-2"
          onClick={clearToDos}
        >
          پاک کردن کامل
        </button>
      </form>
    </div>
  );
};

export default AddNewTodo;

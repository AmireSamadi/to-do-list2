import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import AddNewTodo from "../Components/Tasks/AddNewTodo";
import Todos from "./../Components/Tasks/Todos";
import About from "./../Components/Common/About";
import Nav from "./../Components/Common/Nav";

const App = () => {
  return (
    <Fragment>
      <Nav />
      <AddNewTodo />
      <div className="d-flex justify-content-center container  ">
        <div className="col-md-8 ">
          <div className="card-hover-shadow-2x mt-5 card ">
            <Routes>
              <Route path="/" element={<Todos />} />
              <Route path="/about" element={<About teacherName="صمدی" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;

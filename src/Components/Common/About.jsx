import React, { Fragment } from "react";

const About = ({ teacherName }) => {
  return (
    <Fragment>
      <div className="card text-center border-0">
        <div className="card-body">
          <h5 className="card-title">سازنده برنامه</h5>
          <p className="card-text">{teacherName}</p>
          <a href="https://stackoverflow.com" className="btn btn-primary">
            برو به سایت
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default About;

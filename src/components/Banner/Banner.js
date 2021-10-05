import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="row d-flex banner align-items-center justify-content-center">
        <div className="col-md-6 p-5">
          <h1 className="title">
            EduCare
          </h1>
          <p className="font text-center mt-3">
            Coaching classes and tutorials are seen everywhere today. Unlike private tuition, EduCare larger academic institutes that help students prepare for various.
          </p>
        </div>
        <div className="col-md-6">
        </div>
      </div>
    </>
  );
};

export default Banner;

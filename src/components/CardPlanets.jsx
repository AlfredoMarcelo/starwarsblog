import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Planets = (props) => {
  const {store, actions} = useContext(Context)

  return (
    <div className="card text-light" >
      <img
        src="https://qph.fs.quoracdn.net/main-qimg-380f514d63f3d9bcee09b0798797473a-pjlq"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Name Planet: {props.data.name}</h5>
        <p className="card-text">Type: {props.data.terrain}</p>
        <div className="d-flex justify-content-between">
        <Link to="/" className="btn btn-dark">
          See Planet
        </Link>
        <Link to="/" className="btn btn-danger">
        <i className="bi bi-star-half"></i>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Planets;

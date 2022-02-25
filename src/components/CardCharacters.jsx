import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardCharacters = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card text-light" >
      <img src="https://www.giantbomb.com/a/uploads/square_small/46/462814/3180417-5472872915-latest" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title ">{props.data.name}</h5>
        <p className="card-text">
          {props.data.height}
        </p>
        <div className="d-flex justify-content-between">
        <Link to="/" className="btn btn-dark">
          See Character
        </Link>
        <Link to="/" className="btn btn-danger">
        <i className="bi bi-star-half"></i>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default CardCharacters;

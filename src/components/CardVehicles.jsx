import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

const CardVehicles = (props) => {

  const {store,actions}=useContext(Context)


  return (
    <div className='card text-light' >
      <img src="https://static.turbosquid.com/Preview/2016/11/16__10_31_21/ScreenShot20161028at10.33.59AM.jpg52658B71-F4F8-44B3-9CB1-1D195CD5BE0FLarge.jpg" className='card-img-top' alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <p className="card-text">
          {props.data.model}
        </p>
        <div className="d-flex justify-content-between">
        <Link to="/" className="btn btn-dark">
          See Vehicle
        </Link>
        <Link to="/" className="btn btn-danger">
        <i className="bi bi-star-half"></i>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default CardVehicles
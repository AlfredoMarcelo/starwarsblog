import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const AllData = (props) => {


    //Aqui se llama el flux
    const {store,actions}=  useContext(Context)

    useEffect(()=>{
        actions.fetchCharacter();
        actions.fetchPlanets();
        actions.fetchVehicles();
        
      },[])
      console.log(store.character)
      console.log(store.planets)
      console.log(store.vehicles)        

    return (
    <div className="container">
    <div className="row">
      <div className="col-12">
       {/* <Characters este_es_mi_prop={este_es_mi_Resultado} /> */}
      </div>
    </div>
  </div>
  )
}

export default AllData
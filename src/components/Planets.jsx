import React, { useEffect, useState } from 'react'

const Planets = () => {

    const [planet, setPlanet]=useState([])

    const fetchPlanets = async ()=>{
        const data = await fetch("https://swapi.dev/api/planets");
        const planeta = await data.json();
        setPlanet(planeta)
    } 
    console.log(planet)
   /*  console.log(planet.results.length) */

    useEffect(()=>{
        fetchPlanets();
    },[])


    return (
    <section>
        <div className="container">
            <div className="row text-center">
                <p className='h2'>Planets</p>
            </div>
            <div className="row">
               {planet.results.length > 0 && planet.results.map(item=>(
                <div className="col-12 col-md-6 col-lg-4 mb-5">
                    <div className="card bg-warning">
                        <div className="card-body">
                            <img className='img-fluid' src="" alt="" />
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Name planet: {item.name}
                            </li>
                            <li className="list-group-item">
                                Climate: {item.climate}
                            </li>
                            <li className="list-group-item">
                                population: {item.population}
                            </li>
                            <li className="list-group-item">
                                Terrain: {item.terrain}
                            </li> 
                        </ul>
                        <div className="card-body">
                            <button className='btn btn-outline-dark'>
                                See Planet
                            </button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Planets
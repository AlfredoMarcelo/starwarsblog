export const getState = ({ getStore, getAction, setStore }) => {
  return {
    store: {
      character: [],
      planets:[],
      vehicles:[]
      //Crear variable para planetas y para vehiculos LISTO
    },
    actions: {
      fetchCharacter: () => {
        fetch("https://swapi.dev/api/people", {
          method: "GET",
          headers: { "Content-type": "application/json" },
        })
          .then((resp) => resp.json())
          .then((response) => setStore({ character: response.results }));
      },
      fetchPlanets: () => {
        fetch("https://swapi.dev/api/planets",{
          method: "GET",
          headers: {"Content-type": "application/json"},
        })
          .then((resp)=>resp.json())
          .then((response)=> setStore({planets: response.results}))
      },
      fetchVehicles:() => {
        fetch("https://swapi.dev/api/vehicles", {
          method: "GET",
          headers: {"Content-type": "application/json"},
        })
          .then((resp)=>resp.json())
          .then((response)=>setStore({vehicles:response.results}))
      }
    //Realizar un fetch para planetas y para vehiculos LISTO
    },
  };
};

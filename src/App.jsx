import {BrowserRouter,Switch,Route} from "react-router-dom"
import React from 'react'
import Home from "./views/Home"
import AllData from "./views/AllData"
import { Navbar } from "./components/Navbar";
/* import { User } from "./views/User"; */
import NotFound from "./views/NotFound";
/* import UserFavorite from "./views/UserFavorite"; */
/* import Dashboard from "./views/Dashboard"; */
import injectContext from "./store/appContext";
import BioCharacter from "./components/BioCharacter";

function App(){
  return (
    <BrowserRouter>
      <Navbar/>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/all_data" component={AllData} />
        <Route  path="/single_data" component={BioCharacter} />

        {/* <Route path="/user" component={<User/>} /> */}
        {/* <Route path="/usuarios" component={<Navigate to="/user"/>} /> */}
       {/*  <Route path="/user/:id" component={UserFavorite} /> */}
        {/* <Route path="/dashboard/*" component={<Dashboard/>} /> */}
        <Route path='*' component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default injectContext(App);


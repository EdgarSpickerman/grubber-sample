import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import "../css/reset.css";
import "../css/App.css";

import Error from "./layouts/Error.jsx";
import Home from "./layouts/Home.jsx";

const App = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route component = {Error}/>
      </Switch>
    </HashRouter>
  )
}

export default App;
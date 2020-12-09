import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import HomeList from "./components/HomeList";
import Watch from "./components/Watch";
import Navbar from "./components/Navbar";

const App = () => {

  return (
    <div>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path={["/", "/home"]} component={HomeList} />
          <Route exact path="/watchlist" component={Watch} />
          <Route component={HomeList} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
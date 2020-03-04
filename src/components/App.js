import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Bio from "./Bio";
import Location from "./Location";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route path="/location" component={Location} />
      </Switch>
      <Switch>
        <Route path="/bio" component={Bio} />
      </Switch>
    </div>
  );
};

export default App;

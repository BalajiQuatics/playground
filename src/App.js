import React from "react";
import Dashboard from "./Dashboard/dashboard";
import Popular from "./Popular/popular";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/popular">
            <Popular />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

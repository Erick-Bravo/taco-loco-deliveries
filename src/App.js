import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";

import './App.css';

function App() {
  return (
    <div className="App">

      <Nav />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

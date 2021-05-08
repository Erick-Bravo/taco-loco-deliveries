import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";

import './App.css';

function App() {
  return (
    <div className="App">

      <p>Welcome to the Taco Loco Delivery App</p>
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

import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import ShowDeliveries from "./components/ShowDeliveries";
import AddCustomer from "./components/AddCustomer";

import './App.css';
import EditCustomer from "./components/EditCustomer";

function App() {
  return (
    <div className="App">

      <p>Welcome to the Taco Loco Delivery App - Author: Erick Bravo</p>
      <Nav />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/show-deliveries">
          <ShowDeliveries />
        </Route>
        <Route path="/add-customer-form">
          <AddCustomer />
        </Route>
        <Route path="/edit-customer/:customerId">
          <EditCustomer />
        </Route>
        <Route path="*">
          <p>404 not found</p>
        </Route>

      </Switch>
    </div>
  );
};

export default App;

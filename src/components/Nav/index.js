import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css"

const Nav = () => {
    return (
        <div id="nav">
            <NavLink to="/add-customer-form">Add Customer</NavLink>
            <NavLink to="/show-deliveries">Show Deliveries</NavLink>
        </div>
    );
};

export default Nav
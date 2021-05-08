import React from "react";
import { NavLink } from "react-router-dom";

import "./index.css"
const DeliveryCard = ({ customer }) => {

    const deleteCustomer = (e) => {
        e.preventDefault();
        console.log("Delete function")
    };

    return (
        <div id="delivery-card">
            <div className="left">
                <h2>Name: {customer.firstName} {customer.lastName}</h2>
                <h2>Address: {customer.address}</h2>
            </div>
            <div className="right">
                <NavLink className="small-buttons" to={`/customer/${customer.id}/edit`}>Edit</NavLink>
                <button className="small-buttons" onClick={deleteCustomer}>Delete</button>
            </div>
        </div>
    );
};

export default DeliveryCard
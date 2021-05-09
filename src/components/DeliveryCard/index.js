import React from "react";
import { NavLink } from "react-router-dom";

import "./index.css"
const DeliveryCard = ({ customer }) => {

    const deleteDelivery = async (e) => {
        e.preventDefault();
        await fetch(`https://taco-loco-api.herokuapp.com/customers/${customer.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        window.location.reload();
    };

    return (
        <div id="delivery-card">
            <div className="left">
                <h2>Name: {customer.firstName} {customer.lastName}</h2>
                <h2>Address: {customer.address}</h2>
            </div>
            <div className="right">
                <NavLink className="small-buttons" to={`/edit-customer/${customer.id}`}>Edit</NavLink>
                <button className="small-buttons" onClick={deleteDelivery}>Delete</button>
            </div>
        </div>
    );
};

export default DeliveryCard
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import EditForm from "./EditForm";
import "./index.css";

const EditCustomer = () => {

    const { customerId } = useParams();
    const numCustomerId = parseInt(customerId);

    const [customer, setCustomer] = useState("");

    useEffect(async () => {
        const response = await fetch(`https://taco-loco-api.herokuapp.com/customers/${numCustomerId}`)
        const data = await response.json()
        await setCustomer(data)
    }, []);


    return (
        <div id="main">
            {!customer && <h2>Customer not found</h2>}
            {customer && <EditForm customer={customer} />}
        </div>
    );
};

export default EditCustomer;
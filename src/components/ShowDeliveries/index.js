import React, { useEffect, useState } from "react";
import DeliveryCard from "../DeliveryCard"
import "./index.css";

const ShowDeliveries = () => {

    const [deliveries, setDeliveries] = useState([])

    useEffect(async () => {
        const response = await fetch("https://taco-loco-api.herokuapp.com/customers")
        const data = await response.json()
        await setDeliveries(data)
    }, []);

    useEffect(() => {

    }, [deliveries])

    return (
        <div id="main">
            <div id="deliveries">
                <h1>Deliveries</h1>
                {deliveries && deliveries.map((customer) => {
                    return <DeliveryCard customer={customer} key={customer.id} />
                })}
            </div>
        </div>
    );
};

export default ShowDeliveries
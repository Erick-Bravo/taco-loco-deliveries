import React, { useEffect, useState } from "react";
import DeliveryCard from "../DeliveryCard";
import { loadingGif1 } from "../../loadingGif";
import "./index.css";

const ShowDeliveries = () => {

    const [deliveries, setDeliveries] = useState(null)

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
                {!deliveries && <img src={loadingGif1} alt="loadingGif" height="150px" />}
                {deliveries && deliveries.map((customer) => {
                    return <DeliveryCard customer={customer} key={`${customer.id}`} />
                })}
            </div>
        </div>
    );
};

export default ShowDeliveries
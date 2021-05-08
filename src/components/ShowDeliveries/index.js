import React, { useEffect, useState } from "react";
import "./index.css"

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
                    return <p>{customer.firstName}</p>
                })}
            </div>
        </div>
    );
};

export default ShowDeliveries
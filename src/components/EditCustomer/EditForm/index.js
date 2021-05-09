import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";


const EditForm = ({customer}) => {

    const history = useHistory();

    const [firstName, setFirstName] = useState(customer.firstName);
    const [lastName, setLastName] = useState(customer.lastName);
    const [address, setAddress] = useState(customer.address);
    const [errors, setErrors] = useState([]);
    const [hidden, setHidden] = useState(true)

    useEffect(() => {
        const errors = [];
        if (!firstName.length) errors.push("Please enter First Name");
        if (!lastName.length) errors.push("Please enter Last Name");
        if (!address.length) errors.push("Please enter an address");
        if (!errors.length) setHidden(false);
        if (errors.length) setHidden(true);
        setErrors(errors);
    }, [firstName, lastName, address]);

    const editCustomer = async (e) => {
        e.preventDefault()

        await fetch(`https://taco-loco-api.herokuapp.com/customers/${customer.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ firstName, lastName, address })
        });

        setFirstName("");
        setLastName("");
        setAddress("");

        history.push("/show-deliveries")
    };

    return (
        <>
            <form className="form" onSubmit={editCustomer}>
                <h1>Edit Customer Form</h1>

                <ul>
                    {errors.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>

                <input type="text" name="firstName" value={firstName}
                    placeholder="First Name"
                    onChange={e => setFirstName(e.target.value)} />

                <input type="text" name="lastName" value={lastName}
                    placeholder="Last Name"
                    onChange={e => setLastName(e.target.value)} />

                <input type="text" name="address" value={address}
                    placeholder="Address"
                    onChange={e => setAddress(e.target.value)} />

                <button hidden={hidden}>Add Customer</button>

            </form>
        </>
    );
};

export default EditForm;
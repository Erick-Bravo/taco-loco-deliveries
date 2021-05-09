import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./index.css";

const AddCustomer = () => {

    const history = useHistory();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState([]);
    const [hidden, setHidden] = useState(true)

    useEffect(() => {
        const errors = [];
        if (!firstName.length) errors.push("Please enter First Name");
        if (!lastName.length) errors.push("Please enter Last Name");
        if (!address.length) errors.push("Please enter an address");
        if (!errors.length) setHidden(false);
        setErrors(errors);
    }, [firstName, lastName, address]);

    const onSubmit = async (e) => {
        e.preventDefault()

        const formData = {
            firstName,
            lastName,
            address,
        };

        setFirstName("");
        setLastName("");
        setAddress("");
    };

    return (
        <div id="main">
            <form className="form">
                <h1>Add Customer Form</h1>

                <ul>
                    {errors.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>

                <label>
                    First Name:
                <input type="text" name="firstName" value={firstName}
                        onChange={e => setFirstName(e.target.value)} />
                </label>

                <label>
                    Last Name:
                <input type="text" name="lastName" value={lastName}
                        onChange={e => setLastName(e.target.value)} />
                </label>

                <label>
                    Address:
                <input type="text" name="address" value={address}
                        onChange={e => setAddress(e.target.value)} />
                </label>

                <button hidden={hidden}>Add Customer</button>

            </form>
        </div>
    );
};

export default AddCustomer;
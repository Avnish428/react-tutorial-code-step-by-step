import React from "react";
import { ProviderState } from "./Provider"


const ConsumerB = () => {
    const { age, setAge } = ProviderState();

    const updateAge = () => {
        setAge(25)
    }
    return (
        <>
            <h1>Age:{age}</h1>
            <button onClick={updateAge}>update counter</button>
        </>
    )
}

export default ConsumerB;